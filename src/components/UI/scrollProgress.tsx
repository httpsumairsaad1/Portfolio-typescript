import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercentage, setPercentageScroll] = useState(0);
  useEffect(() => {
    const scrollListener = () => {
      // total scroll from top
      const totalScroll = document.documentElement.scrollTop;

      // total height of the page
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = totalScroll / windowHeight;
      const scrollPercent = scroll * 100;
      setPercentageScroll(scrollPercent);
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className="w-full h-[3px] bg-transparent">
      <div
        className="h-full bg-[color:var(--color-primary)]"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
