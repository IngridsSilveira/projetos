import { useState, useEffect } from "react";
import { DivText } from "./components/DivText/DivText";
import { DivInput } from "./components/DivInput/DivInput";
import { DivSuccess } from "./components/DivSuccess/DivSuccess";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

function App() {
  const isMobile = useIsMobile();

  const [email, setEmail] = useState<string>("");
  const [isSuccessVisible, setIsSuccessVisible] = useState<boolean>(false);

  const images = {
    mobile:
      "/projetos/newsletter-sing-up/assets/images/illustration-sign-up-mobile.svg",
    desktop:
      "/projetos/newsletter-sing-up/assets/images/illustration-sign-up-desktop.svg",
  };

  return (
    <main className="bg-slate-700 w-screen h-screen flex items-center justify-center font-roboto">
      {isSuccessVisible ? (
        <DivSuccess
          email={email}
          onDismiss={() => setIsSuccessVisible(false)}
        />
      ) : (
        <section className="bg-white w-full lg:max-w-5xl h-full md:h-4/5 flex flex-col md:flex-row-reverse rounded-none md:rounded-lg md:p-4 gap-14">
          <img
            src={isMobile ? images.mobile : images.desktop}
            alt="newsletter illustration"
            className="w-full md:w-auto"
          />
          <div className="flex flex-col justify-center gap-6 pl-8">
            <DivText />
            <DivInput
              setEmail={setEmail}
              onSuccess={() => setIsSuccessVisible(true)}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
