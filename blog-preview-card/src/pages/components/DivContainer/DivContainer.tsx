import { DivConteudo } from "../DivConteudo/DivConteudo";

export const DivContainer = () => {
  return (
    <div className="bg-white w-full sm:w-96 p-4 rounded-lg shadow-black shadow-xl">
      <img
        src="/assets/images/illustration-article.svg"
        alt="imagem background com ícones e vetores"
        className="w-full rounded-lg"
      />
      <DivConteudo />
    </div>
  );
};
