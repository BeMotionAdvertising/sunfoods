import React, { useEffect, useRef } from "react";

const ProgressBar = ({ percentage }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barRef.current.style.width = percentage;
          observer.disconnect();
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="progress-bar">
      <div className="progress-fill" ref={barRef}></div>
    </div>
  );
};

export default ProgressBar;
