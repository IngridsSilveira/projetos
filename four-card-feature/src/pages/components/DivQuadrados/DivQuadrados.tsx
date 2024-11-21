import { CSSProperties } from "react";

interface QuadradosProps {
  title: string;
  text: string;
  img: string;
  color: string;
  style?: CSSProperties;
}

const DivColor: { [key: string]: string } = {
  cyan: "bg-style-cyan",
  red: "bg-style-red",
  blue: "bg-style-blue",
  orange: "bg-style-orange",
};

export const DivQuadrados: React.FC<QuadradosProps> = ({
  title,
  text,
  img,
  color,
  style,
}) => {
  const divColor = DivColor[color] || "bg-white";
  return (
    <div
      className="w-80 h-48 rounded-lg bg-slate-50 shadow-lg flex flex-col items-end"
      style={style}
    >
      <div className={`${divColor} w-full h-1.5 rounded-t-lg`}></div>
      <div className="p-3">
        <h2 className="text-xl text-gray-800 font-semibold">{title}</h2>
        <p className="text-sm text-gray-400 font-light mt-2">{text}</p>
      </div>
      <img className="w-20 pr-3" src={img} alt="image diversas, lupa, karma" />
    </div>
  );
};
