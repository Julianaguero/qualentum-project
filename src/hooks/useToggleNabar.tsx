import { useState } from "react";

const useToggleNavbar = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return { clicked, toggleClicked };
};

export default useToggleNavbar;
