import "./Questions.css";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Accordion = ({ title, description, active, setActive }) => {
  const handleTitleClick = () => {
    setActive(active === title ? "" : title);
  };

  return (
    <div className="accordionContainer">
      <div
        className={
          (active === title ? "activeTitle " : "") + "titleContainer" + " flex"
        }
        onClick={handleTitleClick}
      >
        <span className="title">{title}</span>
        {active === title ? (
          <BsArrowUpCircle className="icon" />
        ) : (
          <BsArrowDownCircle className="icon" />
        )}
      </div>
      <p className={(active === title ? "show " : "") + "description"}>
        {description}
      </p>
    </div>
  );
};

export default Accordion;
