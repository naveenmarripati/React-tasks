import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function WhiteComponent() {
  const { setClick } = useContext(ThemeContext);
  return (
    <div className="alignment">
      <button
        onClick={(e) => {
          setClick(false);
        }}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Switch to BLACK MODE
      </button>
      <h1>We're in WHITE MODE</h1>
    </div>
  );
}

export default WhiteComponent;