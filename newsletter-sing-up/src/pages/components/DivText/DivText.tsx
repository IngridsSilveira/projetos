export const DivText = () => {
  const features = [
    {
      text: "Product discovery and building what matters",
      id: 1,
    },
    {
      text: "Measuring to ensure updates are a success",
      id: 2,
    },
    {
      text: "And much more!",
      id: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-5 justify-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-slate-800">
        Stay updated!
      </h1>
      <p className="text-base md:text-xl">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul className="list-none pl-0">
        {features.map(({ text, id }) => (
          <li key={id} className="flex gap-3 mb-3">
            <img
              src="/projetos/newsletter-sing-up/assets/images/icon-list.svg"
              alt={`Icon representing feature: ${text}`}
              className="w-5 h-5"
            />
            <p className="md:text-lg text-sm">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
