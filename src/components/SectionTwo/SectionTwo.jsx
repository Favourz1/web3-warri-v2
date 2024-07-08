import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionTwo.css";

const SectionTwo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial zIndex for panels
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    // Handle animations for panels
    let images = gsap.utils.toArray(".panel:not(.purple)");
    images.forEach((image, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: image,
            start: "top center",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none reverse none",
          },
        })
        .to(image, { height: 0 });
    });

    // Set initial zIndex for panel texts
    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    // Handle animations for panel texts
    let texts = gsap.utils.toArray(".panel-text");
    texts.forEach((text, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: text,
            start: "top center",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none reverse none",
          },
        })
        .to(text, { opacity: 1, y: "50%", duration: 0.33 })
        .to(text, { opacity: 0, y: "0%", duration: 0.33 }, 0.66);
    });

    // Pin the section during scroll
    ScrollTrigger.create({
      trigger: "section.black",
      start: "top top",
      end: "+=" + (images.length + 1) * window.innerHeight,
      pin: true,
      scrub: true,
      markers: true,
      anticipatePin: 1,
    });
  }, []);

  return (
    <section className="black">
      <div className="text-wrap">
        <div className="panel-text blue-text">Blue</div>
        <div className="panel-text red-text">Red</div>
        <div className="panel-text orange-text">Orange</div>
        <div className="panel-text purple-text">Purple</div>
      </div>
      <div className="p-wrap">
        <div className="panel blue"></div>
        <div className="panel red"></div>
        <div className="panel orange"></div>
        <div className="panel purple"></div>
      </div>
    </section>
  );
};

export default SectionTwo;
