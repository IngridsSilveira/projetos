export const DivConteudo = () => {
  return (
    <div className="flex flex-col gap-2">
      <button className="bg-bg-primary-yellow rounded-md w-24 py-1.5 font-extrabold mt-4">
        Learning
      </button>
      <p className="text-gray-800 text-sm">Published 21 Dec 2023</p>
      <h1 className="font-extrabold text-2xl hover:text-yellow-400 hover:cursor-pointer">
        HTML & CSS foundations
      </h1>
      <p className="text-gray-600">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex gap-2.5 items-center mt-2">
        <img className="w-8" src="/assets/images/isLogo.png" alt="logo is" />
        <h2 className="font-bold">Ingrid Souza</h2>
      </div>
    </div>
  );
};
