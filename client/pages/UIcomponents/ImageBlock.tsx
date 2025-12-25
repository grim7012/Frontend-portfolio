import React from "react";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt, caption }) => {
  return (
    <div className="mb-12 text-center">
      <img
        src={src}
        alt={alt}
        className="mx-auto max-w-full rounded-lg shadow-sm"
      />
      {caption && (
        <p className="mt-3 text-gray-500 text-sm italic">{caption}</p>
      )}
    </div>
  );
};

export default ImageBlock;
