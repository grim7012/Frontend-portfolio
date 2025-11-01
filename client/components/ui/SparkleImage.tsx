import React from "react";
import './css/sparkle.css'; // Assuming you have a sparkle.css for animations

const SparkleImage: React.FC = () => {
  const stars = Array.from({ length: 8 });

  return (
    <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
      {/* Image */}
      <img
        src="https://cdn.builder.io/api/v1/assets/32267bc67840490aaa5271179d5b5b94/78417cd9-0696-4469-8d69-b6722c064e07-a7c9b0?format=webp&width=800"
        alt="Ethereal portrait"
        className="w-full h-full object-cover"
      />

{/* Global Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map((_, i) => {
          const delay = Math.random() * 5;
          const size = Math.random() * 6 + 4;
          const duration = Math.random() * 4 + 6;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const color = ["#B0A6C7", "#B0A6C7", "#B0A6C7", "#B0A6C7"][i % 4];

          const starStyle: React.CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${color}, transparent)`,
            position: "absolute",
            top: `${top}vh`,
            left: `${left}vw`,
            borderRadius: "9999px",
            transformOrigin: "center center",
            animation: `swirl ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            opacity: 0.8,
            zIndex: 0,
          };

          return <div key={i} style={starStyle} />;
        })}
      </div>
      </div>
  );
};

export default SparkleImage;
