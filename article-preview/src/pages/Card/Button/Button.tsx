interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="bg-gray-300 hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center"
      onClick={onClick}
      aria-label="Share this article"
    >
      <img
        src="/projetos/article-preview/images/icon-share.svg"
        alt="Share icon"
        className="w-5"
      />
    </button>
  );
};
