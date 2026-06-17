import { useEffect, useRef, useState } from "react";

export default function BeforeAfterSlider({ before, after, beforeSm, afterSm, alt = "Before and after landscape" }) {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setWidth(e.contentRect.width);
    });
    ro.observe(ref.current);
    setWidth(ref.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  };

  const onDown = (e) => {
    dragging.current = true;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={ref}
      data-testid="before-after-slider"
      className="ba-slider relative w-full aspect-[16/10] rounded-2xl shadow-[0_18px_50px_-20px_rgba(46,125,50,0.35)] bg-black overflow-hidden"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      <img
        src={before}
        srcSet={beforeSm ? `${beforeSm} 800w, ${before} 1600w` : undefined}
        sizes="(max-width: 768px) 100vw, 800px"
        alt={`Before — ${alt}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="ba-after" style={{ width: `${pos}%` }}>
        <img
          src={after}
          srcSet={afterSm ? `${afterSm} 800w, ${after} 1600w` : undefined}
          sizes="(max-width: 768px) 100vw, 800px"
          alt={`After — ${alt}`}
          loading="lazy"
          decoding="async"
          className="h-full object-cover"
          style={{ width: width ? `${width}px` : "100%", maxWidth: "none" }}
        />
      </div>
      <div className="ba-handle" style={{ left: `calc(${pos}% - 1.5px)` }} />
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/55 text-white text-[11px] font-bold tracking-widest uppercase">Before</span>
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest text-white text-[11px] font-bold tracking-widest uppercase">After</span>
    </div>
  );
}
