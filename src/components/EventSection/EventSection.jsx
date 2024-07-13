import { useEffect } from "react";
import { eventsData } from "../../data";
import { EventCard } from "../EventCard";

import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable);

const EventSection = () => {
  useEffect(() => {
    const spacing = 0.15; // Increase this value to increase spacing between cards
    gsap.utils.snap(spacing);
    const eventSection = document.querySelector("#events-section-container");
    const cards = gsap.utils.toArray(
      "#events-section-container .event-section__cards-wrapper li"
    );
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    // Play the animation automatically
    gsap.to(scrub, {
      totalTime: "+=3000",
      duration: 3000,
      ease: "none",
      repeat: -1,
      paused: false,
    });

    let iteration = 0;

    function wrapForward() {
      iteration++;
      seamlessLoop.totalTime(
        seamlessLoop.totalTime() + seamlessLoop.duration()
      );
    }

    function wrapBackward() {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause();
      }
    }

    function scrubTo(totalTime) {
      let progress =
        (totalTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();
      if (progress > 1) {
        wrapForward();
      } else if (progress < 0) {
        wrapBackward();
      } else {
        scrub.vars.totalTime = totalTime;
        scrub.invalidate().restart();
      }
    }

    eventSection
      .querySelector(".event-section__actions-next")
      .addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
    eventSection
      .querySelector(".event-section__actions-prev")
      .addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

    window.onload = () => {
      // fix prev not working on page load
      const el = eventSection.querySelector(".event-section__actions-next");
      if (el) {
        for (let i = 0; i < eventsData.length; i++) {
          el.click();
        }
      }
    };

    function buildSeamlessLoop(items, spacing) {
      let overlap = Math.ceil(1 / spacing);
      let startTime = items.length * spacing + 0.5;
      let loopTime = (items.length + overlap) * spacing + 1;
      let rawSequence = gsap.timeline({ paused: true });
      let seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
      });

      gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

      for (let i = 0; i < items.length + overlap * 2; i++) {
        let index = i % items.length;
        let item = items[index];
        let time = i * spacing;
        rawSequence
          .fromTo(
            item,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              zIndex: 100,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
              immediateRender: false,
            },
            time
          )
          .fromTo(
            item,
            { xPercent: 400 },
            {
              xPercent: -400,
              duration: 1,
              ease: "none",
              immediateRender: false,
            },
            time
          );
        i <= items.length && seamlessLoop.add("label" + i, time);
      }

      rawSequence.time(startTime);
      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: "none",
        })
        .fromTo(
          rawSequence,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none",
          }
        );

      return seamlessLoop;
    }

    // Make the eventSection draggable on the horizontal axis
    // Draggable.create(eventSection, {
    //   type: "x",
    //   inertia: true,
    //   bounds: eventSection,
    //   onDrag() {
    //     scrubTo(scrub.vars.totalTime + this.getDirection().x * spacing);
    //   },
    //   onThrowUpdate() {
    //     scrubTo(scrub.vars.totalTime + this.getDirection().x * spacing);
    //   },
    // });
  }, []);

  return (
    <section id="events-section-container" className=" relative py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Events</h1>
      <ul className="event-section__cards-wrapper">
        {eventsData.reverse().map((data, index) => (
          <EventCard data={data} key={index} />
        ))}
      </ul>
      <div className="event-section__actions flex items-center gap-4">
        <button className="event-section__actions-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
          </svg>
        </button>
        <button className="event-section__actions-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default EventSection;
