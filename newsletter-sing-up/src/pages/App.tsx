import { useState, useEffect } from "react";
import { DivText } from "./components/DivText";
import { DivInput } from "./components/DivInput";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="bg-slate-700 w-screen h-screen flex items-center justify-center font-roboto">
      <section className="bg-slate-50 w-full lg:w-3/5 h-full md:h-4/5 flex flex-col md:flex-row-reverse rounded-lg md:p-4 gap-14">
        <img
          src={
            isMobile
              ? "/projetos/newsletter-sing-up/assets/images/illustration-sign-up-mobile.svg"
              : "/projetos/newsletter-sing-up/assets/images/illustration-sign-up-desktop.svg"
          }
          alt="newsletter image"
        />
        <div className="flex flex-col justify-center gap-6 pl-8">
          <DivText />
          <DivInput/>
        </div>
      </section>
    </main>
  );
}

export default App;
