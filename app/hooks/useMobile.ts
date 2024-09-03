import { useState, useEffect } from "react";

export default function useMobile() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isTablet = width <= 1220;
  const isMobile = width <= 768;

  return { isMobile, width, isTablet };
}
