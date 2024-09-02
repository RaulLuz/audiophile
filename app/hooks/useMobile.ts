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

  const isMobile = width <= 1220;

  return { isMobile, width };
}
