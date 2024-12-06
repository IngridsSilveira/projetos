import { Button } from "../Button/Button";
interface EmailProps {
  email: string;
  onDismiss: () => void;
}

export const DivSuccess = ({ email, onDismiss }: EmailProps) => {
  return (
    <section
      className="bg-white w-full md:max-w-md h-screen md:h-3/5 flex flex-col justify-center p-12 gap-6 rounded-none md:rounded-2xl font-roboto"
      aria-live="assertive"
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
          onClick={onDismiss}
          aria-label="Dismiss subscription success message"
        />
      </footer>
    </section>
  );
};
