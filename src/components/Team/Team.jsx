import charlesFreeborn from "../../assets/img/charlesfreeborn.jfif";
import marthaFreeborn from "../../assets/img/martha_freeborn.webp";
import favourOkoh from "../../assets/img/favour-okoh.png";

const Team = () => {
  return (
    <section className="relative py-16" id="team">
      <div className="container mx-auto px-6 team-section__wrapper">
        <div className="team-section__main-title text-4xl font-bold font-inter mb-10 text-center md:text-left">
          Our Team
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[80px] w-full place-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
