import { useEffect } from "react";
import { impactData } from "../../data";
import { CustomCard } from "../CustomCard";

const ImpactSection = () => {
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
  return (
    <section id="impact-section" className="relative py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl font-semibold mb-6">
            How We Are Impacting The World
          </h1>
          <div className="custom-card-container light">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-12 flex-wrap">
              {impactData.slice(0, 3).map((item, index) => (
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
  );
};

export default ImpactSection;
