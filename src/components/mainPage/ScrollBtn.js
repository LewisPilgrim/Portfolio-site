import React, { useState, useEffect } from "react";

const ScrollBtn = ({ scrollToTop }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  return (
    <div>
      {isVisible && (
        <button className="btn-to-top" onClick={scrollToTop} title="Back to top">
          /\
        </button>
      )}
    </div>
  );
};

export default ScrollBtn;
