interface ButtonProps {
  onClick: () => void;
  label: string;
  ariaLabel?: string;
}

export const Button = ({ label, onClick, ariaLabel }: ButtonProps) => {
  return (
    <button
      className="bg-slate-800 hover:bg-gradient-to-r hover:bg-tomato hover:from-red-600 hover:to-red-600 py-3 text-white w-full rounded-lg transition-all duration-300"
      onClick={onClick}
      type="button"
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};
