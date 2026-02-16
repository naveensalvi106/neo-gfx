import { useEffect, useState } from "react";

const CursorTracker = () => {
  const [pos, setPos] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-8 h-8 rounded-full bg-primary/40 border-2 border-primary -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-75 ease-out"
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default CursorTracker;
