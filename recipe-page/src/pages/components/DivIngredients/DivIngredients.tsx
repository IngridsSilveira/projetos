export const DivIngredients = () => {
  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];
  return (
    <div>
      <h1 className="font-young text-3xl text-gray-900">Ingredients</h1>
      <ul className="flex flex-col gap-1 list-disc pl-6 text-gray-700">
        {ingredients.map((el) => (
          <li className="pl-4" key={Math.random()}>
            {el}
          </li>
        ))}
      </ul>
      <span className="border-b-2"></span>
    </div>
  );
};
