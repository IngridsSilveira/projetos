import { useState } from "react";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleShareMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-slate-200 hover:bg-slate-600 rounded-full w-10 h-10 flex items-center justify-center"
        onClick={toggleShareMenu}
      >
        <img
          src="/projetos/article-preview/images/icon-share.svg"
          alt="image share"
          className="w-4"
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 mb-2">
          <div className="relative bg-slate-700 p-3 rounded-lg w-64 flex justify-center gap-7">
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1 h-1 border-l-8 border-r-8 border-t-8 border-t-gray-800 border-l-transparent border-r-transparent"></div>
            <p className="text-slate-400 tracking-widest text-lg font-mono">
              SHARE
            </p>
            <div className="flex gap-3">
              <img
                src="/projetos/article-preview/images/icon-facebook.svg"
                alt="logo facebook"
              />
              <img
                src="/projetos/article-preview/images/icon-twitter.svg"
                alt="logo twitter"
              />
              <img
                src="/projetos/article-preview/images/icon-pinterest.svg"
                alt="logo pinterest"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
