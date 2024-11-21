export const DivImageTitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src="/images/image-omelette.jpeg"
        className="rounded-md"
        alt="egg picture"
      />
      
      <h1 className="font-young text-3xl text-gray-900">
          Simple Omelette Recipe
        </h1>
        <p className="font-outfit text-gray-700">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

    </div>
  );
};
