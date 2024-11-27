import React from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  highlight: string;
  description: string;
  bgColor: string;
  textColor: string;
  className?: string;
  style?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  image,
  highlight,
  description,
  bgColor,
  textColor,
  className,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${bgColor} ${textColor} ${className}`}
    >
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">{highlight}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;
