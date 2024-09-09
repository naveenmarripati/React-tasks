import ThemeContext from "./ThemeContext";
import BlackComponent from "./BlackComponent";
import WhiteComponent from "./WhiteComponent";

import { useState } from "react";

function ContextProvider() {
  const [isClicked, changeClick] = useState(false);
  return (
    <div>
      <ThemeContext.Provider
        value={{ isClicked: isClicked, setClick: changeClick }}
      >
        {isClicked ? (
          <WhiteComponent></WhiteComponent>
        ) : (
          <BlackComponent></BlackComponent>
        )}
      </ThemeContext.Provider>
    </div>
  );
}

export default ContextProvider;