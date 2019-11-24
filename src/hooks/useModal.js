import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
    if (isShowing) {
      document.getElementById("root").style.filter = "none";
    } else {
      document.getElementById("root").style.filter = "blur(3.5px)";
    }
  }

  return {
    isShowing,
    toggle
  };
};

export default useModal;
