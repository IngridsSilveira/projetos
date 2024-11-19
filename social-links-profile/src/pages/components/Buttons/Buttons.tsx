interface ButtonProps {
  titulo: string;
}
export const Buttons: React.FC<ButtonProps> = ({ titulo }) => {
  return (
    <button className="py-2.5 w-full bg-zinc-700 text-white font-semibold font-figtree rounded-md tracking-wider hover:bg-lime-400 hover:text-black">
      {titulo}
    </button>
  );
};
