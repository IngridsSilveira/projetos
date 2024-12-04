import ShareButton from "./ShareButton";

export const Card = () => {
  return (
    <div className="bg-white h-96 max-w-96 md:max-w-xl  md:rounded-tr-lg rounded-br-lg rounded-bl-lg md:rounded-bl-none flex flex-col justify-center gap-6 p-4">
      <h1 className="font-semibold font-sans text-xl md:text-2xl leading-relaxed tracking-wider text-slate-700">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="text-slate-500 text-lg leading-relaxed">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I've got some simple tips to help you make
        any room feel complete.
      </p>

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src="/projetos/article-preview/images/avatar-michelle.jpg"
            alt="image Michelle"
            className="w-14 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-slate-800">Michelle Appleton</h2>
            <p className="text-slate-500">28 Jun 2020</p>
          </div>
        </div>
        <ShareButton />
      </div>
    </div>
  );
};
