import { useState } from "react";
import { Button } from "./Button/Button";
import ShareDiv from "./ShareDiv";

export const Card = () => {
  const [isShareMenuVisible, setIsShareMenuVisible] = useState(false);

  const toggleShareMenu = () => {
    setIsShareMenuVisible(!isShareMenuVisible);
  };

  return (
    <article className="bg-white h-auto min-h-[20rem] md:min-h-[30rem] max-w-96 md:max-w-xl md:rounded-tr-lg rounded-br-none rounded-bl-none md:rounded-bl-none md:rounded-br-lg flex flex-col justify-center gap-6">
      <header className="p-5 flex flex-col gap-6">
        <h1 className="font-semibold font-sans text-xl md:text-2xl leading-relaxed tracking-wider text-slate-700">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
      </header>

      <footer className="p-5 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src="/projetos/article-preview/images/avatar-michelle.jpg"
            alt="Portrait of Michelle Appleton"
            className="w-14 rounded-full"
          />
          <div>
            <p className="font-semibold text-slate-800">Michelle Appleton</p>
            <time className="text-slate-500" dateTime="2020-06-28">
              28 Jun 2020
            </time>
          </div>
        </div>
        <Button onClick={toggleShareMenu} />
      </footer>

      {isShareMenuVisible && (
        <div>
          <ShareDiv />
        </div>
      )}
    </article>
  );
};
