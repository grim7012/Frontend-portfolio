import React from "react";

const TextBlock: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-base leading-relaxed text-gray-700 mb-6">{children}</p>;
};

export default TextBlock;
