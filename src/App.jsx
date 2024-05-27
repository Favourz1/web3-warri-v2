import logoSvg from "./assets/img/logo.svg";
import heroBg from "./assets/img/hero-bg.gif";
import "./App.css";

function App() {
  return (
    <>
      <header className="min-w-full fixed top-0 py-2 z-50">
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
              className="relative pt-2 font-medium after:transition-all after:ease-in-out after:duration-300 after:bg-black after:content-[''] after:h-[2px] after:w-full after:left-0 after:absolute after:-bottom-[2px] after:scale-x-0 hover:after:scale-x-100"
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
          className="relative pb-5 pt-1 bg-white bg-center bg-cover bg-[url('./assets/img/hero-bg.gif')]"
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
          <div className="container mx-auto px-3 po min-h-dvh">
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
      </main>
    </>
  );
}

export default App;
