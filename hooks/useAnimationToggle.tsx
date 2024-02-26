import { useEffect, useState } from "react";

export default function useAnimationToggle(intervalTime: number) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return animate;
}
