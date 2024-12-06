import imgDrawers from "/projetos/article-preview/images/drawers.jpg";
import { Card } from "./Card/Card";
function App() {
  return (
    <main className="bg-slate-200 p-10 w-screen min-h-screen flex flex-col md:flex-row items-center justify-center">
      <img
        src={imgDrawers}
        alt=""
        className="w-full max-w-96 h-auto min-h-[20rem] md:min-h-[30rem] rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg "
      />
      <Card />
    </main>
  );
}

export default App;
