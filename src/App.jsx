import { useEffect } from "react";
// import { useRef } from "react";

import logoSvg from "./assets/img/logo.svg";
import heroBg from "./assets/img/hero-bg.gif";
// import DelsuArbEvent1 from "./assets/img/web3-warri-DELSU.webp";
import theGraphLogo from "./assets/logos/the-graph-logo.png";
import ethLogo from "./assets/logos/eth-logo.svg";
import arbitrumLogo from "./assets/logos/arbitrum-logo.svg";
import charlesDelsuVidMp4 from "./assets/video/charles-delsu-web3-Warri.mp4";
import pointingHandEmoji from "./assets/img/pointing-hand-emoji.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { impactData } from "./data";
import { CustomCard } from "./components/CustomCard";
import "./App.css";
import "./assets/css/card.scss";

function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  // const impactSectionRef = useRef();
  useGSAP(() => {
    // gsap code here...
    // ScrollTrigger.create({
    //   trigger: "#impactSection",
    //   start: "top top",
    //   end: `+=${
    //     document
    //       .querySelector(".impactSection-contentHolder")
    //       .getBoundingClientRect().height
    //   }`,
    //   pin: "#impactSection-imgHolder",
    //   pinSpacing: false,
    //   scrub: 1,
    // });
  }); // <-- scope is for selector text (optional)

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
      // if(card){
      //   card.classList.add("hover-animation");
      // }
      randomizeCardTiles(card);
      // setTimeout(() => {
      //    if (card) {
      //      card.classList.remove("hover-animation");
      //    }
      // }, 2000); // Adjust the delay as needed
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
            <button className=" flex justify-center items-center font-medium py-2 px-5 rounded-xl bg-black text-white text-lg hover:shadow-lg">
              Join Us
            </button>
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
          <div className="container px-6">
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
                poster=""
              >
                <source src={charlesDelsuVidMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* <div className="h-[50dvh] bg-cyan-300  mb-6"></div>
          <div className="h-[50dvh] bg-slate-300  mb-6"></div>
          <div className="h-[50dvh] bg-yellow-300  mb-6"></div> */}
      </main>
    </div>
  );
}

export default App;
