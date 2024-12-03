export const Card = () => {
  return (
    <div className="bg-white h-96 w-2/6 rounded-tr-lg rounded-br-lg flex flex-col justify-center gap-6 p-4">
      <h1 className="font-semibold font-sans text-2xl leading-relaxed tracking-wider text-slate-700">
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
        <button className="bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center">
          <img
            src="/projetos/article-preview/images/icon-share.svg"
            alt="image share"
            className="w-4"
          />
        </button>
      </div>
    </div>
  );
};
