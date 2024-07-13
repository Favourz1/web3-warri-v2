import { useEffect } from "react";
// import { useRef } from "react";

import logoSvg from "./assets/img/logo.svg";
import logoWhiteSvg from "./assets/img/logo-white.svg";
import heroBg from "./assets/img/hero-bg.gif";
import contactImg from "./assets/img/contact-img.png";
import mouseAnimation from "./assets/img/mouse-animation.gif";
// import web3Coin from "./assets/img/web3-coin.png";
// import DelsuArbEvent1 from "./assets/img/web3-warri-DELSU.webp";
import FupreArbEvent1 from "./assets/img/web3Warri-arbitrum-fupre-316.webp";
import graphHack1 from "./assets/img/graph-hack-1.JPG";
import theGraphLogo from "./assets/logos/the-graph-logo.png";
import ethLogo from "./assets/logos/eth-logo.svg";
import arbitrumLogo from "./assets/logos/arbitrum-logo.svg";
// import charlesDelsuVidMp4 from "./assets/video/charles-delsu-web3-Warri.mp4";
// import charlesDelsuVidMov from "./assets/video/charles-delsu-web3-Warri.mov";
// import pointingHandEmoji from "./assets/img/pointing-hand-emoji.png";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger, Draggable } from "gsap/all";
import { TeamSection } from "./components/Team";
import "./App.css";
import "./assets/css/card.scss";
import { ImpactSection } from "./components/ImpactSection";
import { EventSection } from "./components/EventSection";
// gsap.registerPlugin(useGSAP);
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

  const scrollToElementBySelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with selector ${selector} not found.`);
    }
  };

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
    const showAnim = gsap
      .from("#header", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  return (
    <>
      <header
        id="header"
        className="min-w-full fixed top-0 py-2 z-50 bg-[#ffffff38] backdrop-blur-[1px]"
      >
        <nav className="container mx-auto flex justify-between items-center px-6">
          <a href="/">
            <img className="w-32" src={logoSvg} alt="Web3 Warri Logo" />
          </a>

          <ul className="hidden md:flex items-center space-x-2">
            <li className="relative pt-2 font-medium">
              <a
                className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                role="button"
                onClick={() => scrollToElementBySelector("#aboutUs-section")}
              >
                About Us
              </a>
            </li>
            <li className="relative pt-2 font-medium">
              <a
                className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                role="button"
                onClick={() =>
                  scrollToElementBySelector("#events-section-container")
                }
              >
                Events
              </a>
            </li>
            <li className="relative pt-2 font-medium">
              <a
                className="flex items-center gap-1 after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                href="https://medium.com/web3-warri"
                target="_blank"
                rel="noreferrer"
              >
                Blog
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            </li>
            <li className="relative pt-2 font-medium">
              <a
                className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
                role="button"
                onClick={() => scrollToElementBySelector("#team")}
              >
                Team
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              role="button"
              className="hidden md:inline-flex relative pt-2 font-medium after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
              onClick={() => scrollToElementBySelector("#contactUs-section")}
            >
              Contact
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
          {/* <img
            src={web3Coin}
            alt=""
            className="absolute bottom-10 -left-16 rounded-lg object-contain h-52 w-96 animate-floating opacity-50"
          /> */}
          {/* <img
            src={DelsuArbEvent1}
            alt=""
            className="absolute top-4 -left-6 rounded-lg object-cover h-24 w-32 animate-floating"
          /> */}
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
              <div
                className="flex items-center gap-2 p-2 text-sm bg-[#f4f4f403] border border-[#ddd] rounded-3xl mb-4 cursor-pointer hover:bg-[#f4f4f4]"
                onClick={() => scrollToElementBySelector("#impact-section")}
              >
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
                <br className=" md:hidden" />
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
              </h1>
              <a className="relative flex items-center gap-4 text-lg cursor-pointer">
                <div className="relative">
                  <span
                    className="after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-1 after:scale-x-100"
                    href="https://chat.whatsapp.com/Jmkd0a3ooSTISUT9rZo44u"
                    target="_blank"
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
          <img
            className="absolute bottom-12 left-1/2 right-1/2 -translate-x-1/2  w-6 h-6 object-contain"
            src={mouseAnimation}
            alt=""
          />
        </section>

        <section className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-3xl font-semibold mb-6">Our Partners</h1>
              <div className="partner-logo-wrapper flex items-center justify-between gap-4 w-full md:w-[70%]">
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

        <EventSection />
        <ImpactSection />
        <section id="aboutUs-section" className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center mb-8 text-center">
                <h1 className="flex items-center justify-center gap-3 text-3xl text-center font-semibold mb-5">
                  <span>About Us</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-[40]">
                    <img
                      className="rounded-xl object-cover"
                      src={FupreArbEvent1}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-[60]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, in praesentium temporibus minus laborum maiores
                    qui accusamus quam ea eaque!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="weValue-section" className="relative py-8">
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
        </section> */}

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
              <a
                href="https://chat.whatsapp.com/Jmkd0a3ooSTISUT9rZo44u"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
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
        <TeamSection />
        <section id="contactUs-section" className="relative py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="w-full md:w-[60]">
                    <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
                    <p className="text-xl font-medium font-raleway">
                      Have questions, ideas, or interested in partnerships?
                      <br />
                      Reach out to us!
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-8">
                      <a
                        className="btn bg-transparent border-black border text-black"
                        href="mailto:charles.eteure@gmail.com?subject=Inquiries%20on%20Web3%20Warri&body=Hello,%20I%20am%20messaging%20from%20the%20Web3%20Warri%20Website%20and%20need%20to%20make%20inquiries%20on..."
                      >
                        Contact Founder
                      </a>
                      <a
                        className="btn"
                        href="mailto:warriweb3@gmail.com?subject=Inquiries%20on%20Web3%20Warri&body=Hello,%20I%20am%20messaging%20from%20the%20Web3%20Warri%20Website%20and%20need%20to%20make%20inquiries%20on..."
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-[40] hidden md:flex">
                    <img
                      className="rounded-xl object-cover w-[80%]"
                      src={contactImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative py-14 bg-black text-white font-openSans">
        <div className="container flex flex-col  px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <a href="/">
              <img className="w-32" src={logoWhiteSvg} alt="Web3 Warri Logo" />
            </a>{" "}
            <div className="flex items-center gap-3">
              <a
                className="text-sm font-medium cursor-pointer hover:underline"
                role="button"
                onClick={() => scrollToElementBySelector("#aboutUs-section")}
              >
                About Us
              </a>
              <a
                className="text-sm font-medium cursor-pointer hover:underline"
                role="button"
                onClick={() =>
                  scrollToElementBySelector("#events-section-container")
                }
              >
                Events
              </a>
              <a
                href="https://medium.com/web3-warri"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium cursor-pointer hover:underline"
              >
                Blog
              </a>
              <a
                className="text-sm font-medium cursor-pointer hover:underline"
                role="button"
                onClick={() => scrollToElementBySelector("#team")}
              >
                Team
              </a>
              <a
                role="button"
                className="text-sm font-medium cursor-pointer hover:underline"
                onClick={() => scrollToElementBySelector("#contactUs-section")}
              >
                Contact
              </a>
            </div>
            <a
              href="https://chat.whatsapp.com/Jmkd0a3ooSTISUT9rZo44u"
              target="_blank"
              rel="noreferrer"
              className="btn-inverted"
            >
              Join Our Community
            </a>
          </div>
          <div className="flex h-[2px] w-full border-b border-white/20 my-8"></div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              &copy; Web3 Warri. {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <a
                href=""
                className="cursor-pointer text-gray-400 hover:text-white"
              >
                {/* linkedin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
              <a
                href=""
                className="cursor-pointer text-gray-400 hover:text-white"
              >
                {/* x */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </svg>
              </a>
              <a
                href=""
                className="cursor-pointer text-gray-400 hover:text-white"
              >
                {/* medium */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,72,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,72,176ZM184,64c-5.68,0-16.4,2.76-24.32,21.25C154.73,96.8,152,112,152,128s2.73,31.2,7.68,42.75C167.6,189.24,178.32,192,184,192s16.4-2.76,24.32-21.25C213.27,159.2,216,144,216,128s-2.73-31.2-7.68-42.75C200.4,66.76,189.68,64,184,64Zm0,112c-5.64,0-16-18.22-16-48s10.36-48,16-48,16,18.22,16,48S189.64,176,184,176ZM248,72V184a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"></path>
                </svg>
              </a>
              <a
                href=""
                className="cursor-pointer text-gray-400 hover:text-white"
              >
                {/* email */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
