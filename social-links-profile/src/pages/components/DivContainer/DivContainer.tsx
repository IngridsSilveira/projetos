import { Buttons } from "../Buttons/Buttons";

export const DivContainer = () => {
  return (
    <div className="bg-zinc-800 sm:w-80 p-4 rounded-lg flex flex-col items-center justify-center font-figtree gap-2">
      <img src="images/isLogo.png" alt="logo is" className="w-20" />
      <h1 className="text-2xl text-white font-bold tracking-widest">
        Ingrid Souza
      </h1>
      <h2 className="text-md text-lime-400">Rio de Janeiro, Brasil</h2>
      <p className="text-gray-300 mb-2">"Front-end developer and gamer."</p>

      <Buttons titulo="GitHub" />
      <Buttons titulo="Frontend Mentor" />
      <Buttons titulo="LinkedIn" />
      <Buttons titulo="Twitter" />
      <Buttons titulo="Instagram" />
    </div>
  );
};
