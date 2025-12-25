import React from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt = "",
  reverse = false,
  children,
}) => {
  return (
    <section className="w-full py-24 px-6 md:px-16">
      <div
        className={`max-w-6xl mx-auto grid gap-16 items-center ${
          image ? "md:grid-cols-2" : "md:grid-cols-1"
        } ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Text Content */}
        <div className="space-y-6">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-gray-500">
              {subtitle}
            </p>
          )}

          {title && (
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-lg text-gray-600 max-w-xl">
              {description}
            </p>
          )}

          {children}
        </div>

        {/* Image */}
        {image && (
          <div className="w-full">
            <img
              src={image}
              alt={imageAlt}
              className="w-full rounded-xl object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
