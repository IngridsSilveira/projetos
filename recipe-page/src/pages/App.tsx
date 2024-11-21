import {
  DivImageTitle,
  DivPreparation,
  DivIngredients,
  DivInstruction,
  DivNutrition,
} from "./index";

function App() {
  return (
    <main className="bg-primary-bg sm:p-8 flex items-center justify-center">
      <section className="bg-slate-50 shadow-xl rounded-lg w-full sm:w-2/3 p-8 flex flex-col gap-5 leading-relaxed">
        <DivImageTitle />
        <DivPreparation />
        <DivIngredients />
        <DivInstruction />
        <DivNutrition />
      </section>
    </main>
  );
}

export default App;
