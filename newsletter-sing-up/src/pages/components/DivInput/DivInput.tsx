import { useState } from "react";
import { Button } from "../Button/Button";

interface DivInputProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  onSuccess: () => void;
}

export const DivInput = ({ setEmail, onSuccess }: DivInputProps) => {
  const [input, setInput] = useState<string>("");
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(input);

    if (!isValid) {
      setIsInvalidEmail(true);
    } else {
      setIsInvalidEmail(false);
      setEmail(input);
      onSuccess();
    }

    setInput("");
  };

  return (
    <form className="flex flex-col w-11/12 font-roboto">
      <div className="flex items-center justify-between mb-1">
        <label htmlFor="email" className="font-bold text-slate-800">
          Email address
        </label>
        <span className="text-sm text-red-600 font-bold" id="spanValid">
          {isInvalidEmail && "Valid email required"}
        </span>
      </div>
      <input
        id="email"
        className={`border px-3 py-3.5 rounded-lg mb-4 focus:outline-none focus:ring-2 ${
          isInvalidEmail
            ? "border-red-600 bg-red-400 focus:ring-red-600"
            : "focus:ring-slate-800"
        }`}
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
