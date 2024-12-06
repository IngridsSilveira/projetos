const ShareDiv = () => {
  return (
    <nav aria-label="Share on social media" className="relative">
      <div className="md:absolute -top-44 -right-24 bg-gray-800 p-4 rounded-b-lg md:rounded-lg w-screen max-w-96 md:w-64 flex justify-center gap-7">
        <div
          className="absolute hidden md:block bottom-[-6px] transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-gray-800 border-l-transparent border-r-transparent"
          aria-hidden="true"
        ></div>

        <p className="text-slate-400 tracking-widest text-lg font-mono">
          SHARE
        </p>

        <ul className="flex gap-3">
          <li>
            <img
              src="/projetos/article-preview/images/icon-facebook.svg"
              alt="Facebook"
            />
          </li>
          <li>
            <img
              src="/projetos/article-preview/images/icon-twitter.svg"
              alt="Twitter"
            />
          </li>
          <li>
            <img
              src="/projetos/article-preview/images/icon-pinterest.svg"
              alt="Pinterest"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ShareDiv;
