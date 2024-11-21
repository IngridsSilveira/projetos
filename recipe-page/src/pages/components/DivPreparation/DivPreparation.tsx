export const DivPreparation = () => {
  return (
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
          <span className="font-bold pl-4 text-gray-800">Preparation: </span>5
          minutes
        </li>
        <li>
          <span className="font-bold pl-4 text-gray-800">Cooking: </span>5
          minutes
        </li>
      </ul>
    </div>
  );
};
