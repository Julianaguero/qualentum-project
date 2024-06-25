import { useState } from "react";

export default function useToggleNavbar() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return { clicked, toggleClicked };
}

