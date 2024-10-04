/* eslint-disable react/prop-types */
const CustomCard = ({
  id,
  title = "",
  bodyText = "",
  icon,
  animate = false,
}) => {
  return (
    <div className={`card ${animate ? "hover-animation" : ""}`}>
      <div className="flex items-center justify-center gap-3">
        <span className="icon">{icon}</span>
        {/* <h4 className="text-center">{title}</h4> */}
      </div>
      {id !== 4 && <p>{bodyText}</p>}
      {id === 4 && (
        <p className="flex flex-col">
          <p className="font-medium">By the numbers:</p>
          <ul className="list-disc pl-6">
            <li>470 plus members</li>
            <li>2 day hackathon organized</li>
            <li>10 plus workshops/meetups</li>
          </ul>
        </p>
      )}
      <div className="shine"></div>
      <div className="background">
        <div className="tiles">
          <div className="tile tile-1"></div>
          <div className="tile tile-2"></div>
          <div className="tile tile-3"></div>
          <div className="tile tile-4"></div>

          <div className="tile tile-5"></div>
          <div className="tile tile-6"></div>
          <div className="tile tile-7"></div>
          <div className="tile tile-8"></div>

          <div className="tile tile-9"></div>
          <div className="tile tile-10"></div>
        </div>

        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default CustomCard;
