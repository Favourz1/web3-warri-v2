import { useEffect } from "react";
// import { useRef } from "react";

import logoSvg from "./assets/img/logo.svg";
import heroBg from "./assets/img/hero-bg.gif";
import DelsuArbEvent1 from "./assets/img/web3-warri-DELSU.webp";
import graphHack1 from "./assets/img/graph-hack-1.JPG";
import theGraphLogo from "./assets/logos/the-graph-logo.png";
import ethLogo from "./assets/logos/eth-logo.svg";
import arbitrumLogo from "./assets/logos/arbitrum-logo.svg";
import charlesDelsuVidMp4 from "./assets/video/charles-delsu-web3-Warri.mp4";
import charlesDelsuVidMov from "./assets/video/charles-delsu-web3-Warri.mov";
import pointingHandEmoji from "./assets/img/pointing-hand-emoji.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, Draggable } from "gsap/all";
import { impactData } from "./data";
import { CustomCard } from "./components/CustomCard";
import "./App.css";
import "./assets/css/card.scss";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, Draggable);

function App() {
  // useGSAP(() => {
  //   // gsap code here...
  //   // ScrollTrigger.create({
  //   //   trigger: "#impactSection",
  //   //   start: "top top",
  //   //   end: `+=${
  //   //     document
  //   //       .querySelector(".impactSection-contentHolder")
  //   //       .getBoundingClientRect().height
  //   //   }`,
  //   //   pin: "#impactSection-imgHolder",
  //   //   pinSpacing: false,
  //   //   scrub: 1,
  //   // });
  // }); // <-- scope is for selector text (optional)

  const randomizeCardTiles = (card) => {
    const tiles = card.querySelectorAll(".custom-card-container .tile");
    tiles.forEach((tile) => {
      const randomDelay = Math.random() * 8; // Random delay between 0 and 8 seconds
      tile.style.animationDelay = `${randomDelay}s`;
    });
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".custom-card-container .card");

    cards.forEach((card) => {
      randomizeCardTiles(card);
    });
  }, []);

  useEffect(() => {
    // Set initial properties
    gsap.set(".fullwidth-image__text", {
      y: "100%",
      opacity: 0,
    });

    // Create a timeline with scrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
        once: false,
      },
    });

    // Define animations
    tl.to(".fullwidth-image__overlay", {
      opacity: 0.4,
    })
      .to(
        ".fullwidth-image",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0
      )
      .to(
        ".fullwidth-image img",
        {
          scale: 1,
        },
        0
      )
      .to(".fullwidth-image__text", {
        y: "40%",
        opacity: 1,
      });

    // Cleanup on component unmount
    return () => tl.kill();
  }, []);

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
        for (let i = 0; i < 31; i++) {
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
    Draggable.create(eventSection, {
      type: "x",
      inertia: true,
      bounds: eventSection,
      onDrag() {
        scrubTo(scrub.vars.totalTime + this.getDirection().x * spacing);
      },
      onThrowUpdate() {
        scrubTo(scrub.vars.totalTime + this.getDirection().x * spacing);
      },
    });
  }, []);

  return (
    <div className="">
      <header className="min-w-full fixed top-0 py-2 z-50 bg-[#ffffff38] backdrop-blur-[1px]">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <a href="#">
            <img className="w-32" src={logoSvg} alt="Web3 Warri Logo" />
          </a>

          <ul className="hidden md:flex items-center space-x-2">
            <li className="relative pt-2 font-medium">
              <a
                className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="relative pt-2 font-medium">
              <a
                className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                href="#"
              >
                Events
              </a>
            </li>
            <li className="relative pt-2 font-medium">
              <a
                className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                href="#"
              >
                Team
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex relative pt-2 font-medium after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
            >
              Support
            </a>
            <button className="btn">Join Us</button>
          </div>
        </nav>
      </header>
      <main>
        <section
          className="relative mb-5 pt-1 bg-center bg-cover bg-[url('./assets/img/hero-bg.gif')]"
          style={{ backgroundImage: heroBg }}
        >
          {/* <video
            className="absolute top-0 left-0 w-screen h-screen -z-10"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src={heroBgVid} type="video/mp4" />
            <source src="video/hero-vid.mov" type="video/quicktime"/>
                <source src="video/hero-vid.webm" type="video/webm"/>
          </video> */}
          <div className="container mx-auto px-6 min-h-dvh max-h-dvh">
            <div className="flex flex-col items-center justify-center min-h-[inherit]">
              <div className="flex items-center gap-2 p-2 text-sm bg-[#f4f4f403] border border-[#ddd] rounded-3xl mb-4 cursor-pointer hover:bg-[#f4f4f4]">
                <span className="flex items-center px-2 py-1 bg-black text-white rounded-3xl">
                  Update
                </span>
                <span>See our impact</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#050000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                  </svg>
                </span>
              </div>

              <h1 className="text-6xl text-center font-semibold mb-12">
                Building the&nbsp;
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient( 78deg, #f7d336 30%, #8ae99c )",
                  }}
                >
                  next generation
                </span>
                <br /> of internet builders.
                {/* <span>Building</span>
                <br />
                <span>the</span>
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient( 78deg, #f7d336 30%, #8ae99c )",
                  }}
                >
                  next generation
                </span>
                <br />
                <span>of</span>
                <br />
                <span> internet builders</span> */}
              </h1>
              <a className="relative flex items-center gap-4 text-lg cursor-pointer">
                <div className="relative">
                  <span
                    className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-1 after:scale-x-100"
                    href="#"
                  >
                    Join Our Community
                  </span>
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#050000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-3xl font-semibold mb-6">Our Partners</h1>
              <div className="partner-logo-wrapper flex items-center justify-between gap-4 w-[70%]">
                <figure>
                  <img
                    className="partner-logo-1 min-w-24 w-52 h-auto grayscale hover:grayscale-0"
                    src={theGraphLogo}
                    alt="The Graph Logo"
                  />
                </figure>
                <figure>
                  <img
                    className="partner-logo-2 min-w-24 w-52 h-auto grayscale hover:grayscale-0"
                    src={ethLogo}
                    alt="Ethereum Logo"
                  />
                </figure>
                <figure>
                  <img
                    className="partner-logo-3 min-w-24 w-52 h-auto grayscale hover:grayscale-0"
                    src={arbitrumLogo}
                    alt="Arbitrum Logo"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="events-section-container" className=" relative py-8">
          <h1 className="text-3xl font-semibold text-center mb-6">Events</h1>
          <ul className="event-section__cards-wrapper">
            {[...Array(31)].map((_, index) => (
              <li key={index}>
                <div className="group relative flex flex-col justify-between text-white p-4 rounded-lg min-h-[400px] min-w-[350px] -ml-[50px] border-2 border-gray-400 bg-[url('./assets/img/web3-warri-DELSU.webp')] bg-cover bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full  hover:before:bg-[#0d0a143e]">
                  <h3 className="text-2xl font-semibold font-raleway z-[2]">
                    Introduction To Subgraph {index}
                  </h3>

                  <div className="flex flex-col gap-3 z-[2]">
                    <p className="text-lg font-openSans">
                      We are going to dive deep into building of subgraph with
                      graph protocol
                    </p>
                    <p className="text-sm underline cursor-pointer">Register</p>
                  </div>
                </div>
              </li>
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

        <section className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-3xl font-semibold mb-6">
                How We Are Impacting The World
              </h1>
              <div className="custom-card-container light">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-12 flex-wrap">
                  {impactData.map((item, index) => (
                    <CustomCard
                      key={index}
                      title={item.title}
                      bodyText={item["write_up"]}
                      icon={item.icon}
                      animate={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center mb-8 text-center">
                <h1 className="flex items-center justify-center gap-3 text-3xl text-center font-semibold">
                  <span>We Value You</span>
                  <img src={pointingHandEmoji} alt="" />
                </h1>
                <p className="text-base text-slate-900 font-openSans max-w-[60%]">
                  At Web3 Warri we embrace decentralization, immutability,
                  permissionless innovation, trustlessness, and
                  crypto-economics, while celebrating inclusivity and diverse
                  participation.
                </p>
              </div>
              <video
                className="w-full h-[500px] rounded-xl object-cover"
                autoPlay
                loop
                muted
                poster={DelsuArbEvent1}
              >
                <source src={charlesDelsuVidMp4} type="video/mp4" />
                <source src={charlesDelsuVidMov} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center w-full">
              <div className="relative text-center mb-6">
                <h1 className="text-5xl font-bold font-openSans">
                  Join Our <br />
                  Community
                </h1>
                <svg
                  viewBox="0 0 634 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.40051 2.37525C1.40051 2.37525 68.8688 48.875 223.369 20.375C377.869 -8.125 633.4 12.3911 633.4 12.3911"
                    stroke="black"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              <p className="text-base mb-4">
                Become a part of our inclusive and innovative Web 3.0 journey!
              </p>
              <a href="" className="btn">
                Join Us
              </a>
            </div>
          </div>
        </section>

        <section className="fullwidth-image py-8">
          <div className="fullwidth-image__overlay"></div>
          <div className="fullwidth-image__text">
            <h2>Your Gateway to Web3 Mastery</h2>
            <p>
              Connect with passionate blockchain enthusiasts and experts.
              Explore, innovate, and revolutionize the digital landscape with
              our vibrant community.
            </p>
          </div>
          <img className="rounded-xl" src={graphHack1} />
        </section>

        <div className="h-[50dvh] bg-cyan-300  mb-6"></div>
        <div className="h-[50dvh] bg-slate-300  mb-6"></div>
        <div className="h-[50dvh] bg-yellow-300  mb-6"></div>
      </main>
    </div>
  );
}

export default App;
