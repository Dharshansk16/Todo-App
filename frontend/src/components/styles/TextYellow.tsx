import React from "react";

interface TextYellowProps {
  text: string;
}

const TextYellow: React.FC<TextYellowProps> = ({ text }) => {
  return <span className="text-yellow-500">{text}</span>;
};

export default TextYellow;
