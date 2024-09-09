import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./BlackComponent.css";

function BlackComponent() {
  const { setClick } = useContext(ThemeContext);
  return (
    <div>
      <div className="blackmode">
        <button
          onClick={(e) => {
            setClick(true);
          }}
          style={{ backgroundColor: "white", color: "black" }}
        >
          Switch to WHITE MODE
        </button>
        <h1 className="fontcolor">We're in BLACK MODE</h1>
      </div>
    </div>
  );
}

export default BlackComponent;