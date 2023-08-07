import { useEffect, useRef } from "react";

export const useInterval = (drop: Function, delay: number | null) => {
  const callback = useRef<Function>();

  useEffect(() => {
    callback.current = drop;
  }, [drop]);

  useEffect(() => {
    const tick = () => callback.current && callback.current();
    if (delay !== null) {
      const interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
};
