import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="text-center py-20 px-6 bg-gray-50">
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="mx-auto max-w-md rounded-lg shadow-md"
      />
    </div>
  );
};

export default HeroSection;
