import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

interface DivInputProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const DivInput = ({ setEmail }: DivInputProps) => {
  const [input, setInput] = useState<string>("");
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(input);
    const divSucesso = document.getElementById("divSucesso") as HTMLElement;
    const divPrincipal = document.getElementById("divPrincipal") as HTMLElement;

    if (!isValid) {
      setIsInvalidEmail(true);
    } else {
      setIsInvalidEmail(false);
      setEmail(input);
      divSucesso.className = "block";
      divPrincipal.className = "hidden";
    }

    setInput("");
  };
  useEffect(() => {
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const spanValid = document.getElementById("spanValid") as HTMLElement;

    if (isInvalidEmail) {
      inputEmail.className =
        "border border-red-600 px-3 py-3.5 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-600 bg-red-400";
      spanValid.textContent = "Valid email required";
    } else {
      inputEmail.className =
        "border px-3 py-3.5 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800";
      spanValid.textContent = "";
    }
  }, [isInvalidEmail]);
  return (
    <form className="flex flex-col w-11/12 font-roboto">
      <div className="flex items-center justify-between mb-1">
        <label htmlFor="email" className="font-bold text-slate-800">
          Email address
        </label>
        <span className="text-sm text-red-600 font-bold" id="spanValid"></span>
      </div>
      <input
        id="email"
        className="border px-3 py-3.5 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800"
        type="email"
        placeholder="email@company.com"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />

      <Button label="Subscribe to monthly newsletter" onClick={handleSubmit} />
    </form>
  );
};
