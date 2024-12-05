export const DivInput = () => {
  return (
    <div className="flex flex-col w-11/12 font-roboto">
      <label htmlFor="email" className="font-bold text-slate-800 mb-1">
        Email adress
      </label>
      <input
        className="border px-3 py-3.5 rounded-lg mb-5"
        type="text"
        placeholder="email@company.com"
      />
      <button className="bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:bg-tomato py-3 text-white w-full rounded-lg">
        Subscribe to monthly newsletter
      </button>
    </div>
  );
};
