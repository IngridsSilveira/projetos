export const DivText = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-5 justify-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-slate-800">
        Stay updated!
      </h1>
      <p className="text-lg md:text-xl">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <div className="flex gap-3">
        <img
          src="/projetos/newsletter-sing-up/assets/images/icon-list.svg"
          alt=""
        />
        <p className="md:text-lg">Product discover and building what matters</p>
      </div>
      <div className="flex gap-3">
        <img
          src="/projetos/newsletter-sing-up/assets/images/icon-list.svg"
          alt=""
        />
        <p className="md:text-lg">Measuring to ensure updates are a success</p>
      </div>
      <div className="flex gap-3">
        <img
          src="/projetos/newsletter-sing-up/assets/images/icon-list.svg"
          alt=""
        />
        <p className="md:text-lg">And much more!</p>
      </div>
    </div>
  );
};
