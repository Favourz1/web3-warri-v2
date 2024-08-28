import charlesFreeborn from "../../assets/img/charlesfreeborn.jfif";
import marthaFreeborn from "../../assets/img/martha_freeborn.webp";
import favourOkoh from "../../assets/img/favour-okoh.webp";

const Team = () => {
  return (
    <section className="relative py-16" id="team">
      <div className="container mx-auto px-6 team-section__wrapper">
        <div className="team-section__main-title text-4xl font-bold font-inter mb-10 text-center md:text-left">
          Our Team
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px] w-full place-content-center">
          <div
            className="team-section__item"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            <div className="team-section__item-img-wrapper">
              <img
                className="team-section__item-img object-cover"
                src={charlesFreeborn}
                alt=""
              />
            </div>
            <div className="team-section__item__user-wrapper">
              <div className="team-section__item__user-name mb-4 md:mb-0">
                Charles Freeborn
              </div>
              <div className="team-section__item__user-title">
                Co-Founder
                <span className="hidden md:block"> Community Manager</span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4">
                <a
                  className="cursor-pointer text-gray-400 hover:text-black"
                  href="https://www.linkedin.com/in/charleseteure/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* linkedin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                  </svg>
                </a>
                <a
                  className="cursor-pointer text-gray-400 hover:text-black"
                  href="https://twitter.com/charliecodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* X */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z"></path>
                  </svg>
                </a>
              </div>
              <a
                href="mailto:charles.eteure@gmail.com"
                className="text-sm underline absolute bottom-[-20px] left-1/2 -translate-x-1/2"
              >
                charles.eteure@gmail.com
              </a>
            </div>
          </div>
          <div
            className="team-section__item"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="340"
          >
            <div className="team-section__item-img-wrapper">
              <img
                className="team-section__item-img"
                src={marthaFreeborn}
                alt=""
              />
            </div>
            <div className="team-section__item__user-wrapper">
              <div className="team-section__item__user-name mb-4 md:mb-0">
                Martha Freeborn
              </div>
              <div className="team-section__item__user-title">
                Co-Founder
                <span className="hidden md:block">
                  Diversity and Inclusion Manager
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4">
                <a
                  className="cursor-pointer text-gray-400 hover:text-black"
                  href="https://www.linkedin.com/in/martha-omoerherhe-freeborn-323643134"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* linkedin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                  </svg>
                </a>
                <a
                  className="cursor-pointer text-gray-400 hover:text-black"
                  href="https://twitter.com/FreebornMartha"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* X */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className="team-section__item"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="340"
          >
            <div className="team-section__item-img-wrapper">
              <img
                className="team-section__item-img object-cover"
                src={favourOkoh}
                alt=""
              />
            </div>
            <div className="team-section__item__user-wrapper">
              <div className="team-section__item__user-name mb-4 md:mb-0">
                Favour Okoh
              </div>
              <div className="team-section__item__user-title">
                Program Manager
                <span className="hidden md:block">Developers Team</span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4">
                <a
                  className="cursor-pointer text-gray-400 hover:text-black"
                  href="https://www.linkedin.com/in/favour-okoh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* linkedin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                  </svg>
                </a>
                <a
                  className="cursor-pointer text-gray-400 hover:text-black"
                  href="https://x.com/_favourz"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* X */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
