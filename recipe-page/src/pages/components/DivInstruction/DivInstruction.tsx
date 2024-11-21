export const DivInstruction = () => {
  const intrucoes = [
    {
      title: "Beat the eggs:",
      text:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier",
        id: 0,
    },
    {
      title: "Heat the pan:",
      text:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
        id: 1,
    },
    {
      title: "Cook the omelette:",
      text:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
        id: 2,
    },
    {
      title: "Add fillings (optional):",
      text:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
        id: 3,
    },
    {
      title: "Fold and serve:",
      text:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
        id: 4,
    },
    {
      title: "Enjoy:",
      text:
        "Serve hot, with additional salt and pepper if needed.",
        id: 5,
    },
  ];
  return (
    <div>
      <h1 className="font-young text-3xl text-gray-900">Instructions</h1>
      <ul className="flex flex-col gap-3 list-decimal pl-6 text-gray-800 font-outfit">
      {intrucoes.map((el) => (
        <li className="text-gray-800" key={el.id}>
          <span className="font-bold text-gray-900">{el.title}</span>
          {el.text}
        </li>
      ))}
      </ul>
      <span className="border-b-2"></span>
    </div>
  );
};