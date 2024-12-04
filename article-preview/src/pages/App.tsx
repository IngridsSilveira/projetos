import { Card } from "./Card/Card";
function App() {
  return (
    <main className="bg-slate-200 w-screen h-screen flex flex-col md:flex-row items-center justify-center p-4">
      <div className="bg-drawers-bg bg-cover w-96 h-96 rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg "></div>
      <Card />
    </main>
  );
}

export default App;
