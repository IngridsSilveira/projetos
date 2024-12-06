import { Button } from "../Button/Button";

interface EmailProps {
  email: string;
}

export const DivSuccess = ({ email }: EmailProps) => {
  const handleDismiss = () => {
    const divSucesso = document.getElementById("divSucesso") as HTMLElement;
    const divPrincipal = document.getElementById("divPrincipal") as HTMLElement;
    divSucesso.className = "hidden";
    divPrincipal.className =
      "bg-white w-full lg:max-w-5xl h-full md:h-4/5 flex flex-col md:flex-row-reverse rounded-none md:rounded-lg md:p-4 gap-14";
  };

  return (
    <section id="divSucesso" className="hidden" aria-live="assertive">
      <article
        className="bg-white w-full md:max-w-md h-screen md:h-3/5 flex flex-col justify-center p-12 gap-6 rounded-none md:rounded-2xl font-roboto"
        role="alert"
      >
        <header>
          <img
            src="/projetos/newsletter-sing-up/assets/images/icon-list.svg"
            alt="Ícone de sucesso indicando inscrição realizada"
            className="w-10"
          />
        </header>

        <h1
          className="text-4xl md:text-5xl font-bold text-slate-800"
          tabIndex={0}
        >
          Thanks for subscribing!
        </h1>

        <p className="mb-3 text-sm tracking-wider">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>

        <footer>
          <Button
            label="Dismiss message"
            onClick={handleDismiss}
            aria-label="Dismiss subscription success message"
          />
        </footer>
      </article>
    </section>
  );
};
