export const DivNutrition = () => {
  return (
    <div>
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
    </div>
  );
};
