function App() {
  return (
    <main className="bg-primary-bg contain-content p-8 flex items-center justify-center">
      <section className="bg-slate-50 shadow-xl rounded-lg w-2/3 p-8 flex flex-col gap-4 leading-relaxed">
        {/* componente image + títulos */}
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

        {/* componente preparação */}
        <div className="bg-pink-100 rounded-lg p-5 w-full h-40 flex flex-col gap-2 mb-3">
          <h2 className="font-outfit text-xl text-brown font-bold">
            Preparation time
          </h2>
          <ul className="flex flex-col gap-1.5 list-disc pl-6 text-gray-700">
            <li>
              <span className="font-bold pl-4 text-gray-800 ">Total: </span>
              Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold pl-4 text-gray-800">
                Preparation:{" "}
              </span>
              5 minutes
            </li>
            <li>
              <span className="font-bold pl-4 text-gray-800">Cooking: </span>5
              minutes
            </li>
          </ul>
        </div>

        {/* componente ingredientes */}
        <h1 className="font-young text-3xl text-gray-900">Ingredients</h1>
        <ul className="flex flex-col gap-1 list-disc pl-6 text-gray-700">
          <li className="pl-4">2-3 large eggs</li>
          <li className="pl-4">Salt, to taste</li>
          <li className="pl-4">Pepper, to taste</li>
          <li className="pl-4">1 tablespoon of butter or oil</li>
          <li className="pl-4">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <span className="border-b-2"></span>

        {/* componente instrução */}
        <h1 className="font-young text-3xl text-gray-900">Instructions</h1>
        <ul className="flex flex-col gap-3 list-decimal pl-6 text-gray-800 font-outfit">
          <li className="text-gray-800">
            <span className="font-bold text-gray-900">Beat the eggs:</span> In a
            bowl, beat the eggs with a pinch of salt and pepper until they are
            well mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li className="text-gray-800">
            <span className="font-bold text-gray-900">Heat the pan:</span> Place
            a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="text-gray-800">
            <span className="font-bold text-gray-900">Cook the omelette:</span>{" "}
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </li>
          <li className="text-gray-800">
            <span className="font-bold text-gray-900">
              Add fillings (optional):
            </span>{" "}
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li className="text-gray-800">
            <span className="font-bold text-gray-900">Fold and serve:</span> As
            the omelette continues to cook, carefully lift one edge and fold it
            over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </li>
          <li className="text-gray-800">
            <span className="font-bold text-gray-900">Enjoy:</span> Serve hot,
            with additional salt and pepper if needed.
          </li>
        </ul>
        <span className="border-b-2"></span>

        {/* componente nutrição */}
        <h1 className="font-young text-3xl text-gray-900">Nutrition</h1>
        <p className="font-outfit text-gray-700">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <table className="w-full text-left border-collapse ml-5">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-gray-600">Calories</td>
              <td className="py-2 text-red-700 font-bold">277kcal</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-gray-600">Carbs</td>
              <td className="py-2 text-red-700 font-bold">0g</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-gray-600">Protein</td>
              <td className="py-2 text-red-700 font-bold">20g</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600">Fat</td>
              <td className="py-2 text-red-700 font-bold">22g</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
