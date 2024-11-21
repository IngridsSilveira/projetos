import { DivQuadrados } from "./components/DivQuadrados/DivQuadrados";
import { DivText } from "./components/DivText/DivText";

function App() {
  return (
    <main className="bg-slate-100 h-screen w-screen font-poppins flex flex-col items-center p-6 sm:gap-8 gap-2">
      <DivText />

      <section className="flex flex-col md:flex-row gap-6 font-poppins">
        <DivQuadrados
          style={{ marginTop: "80px" }}
          title="Supervisor"
          text="Monitors activity to identify project roadblocks"
          img="images/icon-supervisor.svg"
          color="cyan"
          key={Math.random()}
        />
        <div className="flex flex-col gap-6">
          <DivQuadrados
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your
                project"
            img="images/icon-team-builder.svg"
            color="red"
            key={Math.random()}
          />
          <DivQuadrados
            title="Karma"
            text="Regularly evaluates our talent to ensure quality"
            img="images/icon-karma.svg"
            color="orange"
            key={Math.random()}
          />
        </div>

        <DivQuadrados
          style={{ marginTop: "80px" }}
          title="Calculator"
          text="Uses data from past projects to provide better delivery estimates"
          img="images/icon-calculator.svg"
          color="blue"
          key={Math.random()}
        />
      </section>
    </main>
  );
}

export default App;
