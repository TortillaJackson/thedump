
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface MathCaptchaProps {
  onCaptchaChange: (isValid: boolean, userAnswer: string) => void;
  shouldReset: boolean;
}

export const MathCaptcha = ({ onCaptchaChange, shouldReset }: MathCaptchaProps) => {
  const [captcha, setCaptcha] = useState({ question: "", answer: 0, userAnswer: "" });

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let answer;
    let question;
    
    switch (operator) {
      case '+':
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        answer = larger - smaller;
        question = `${larger} - ${smaller}`;
        break;
      case '×':
        answer = num1 * num2;
        question = `${num1} × ${num2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }
    
    setCaptcha({ question, answer, userAnswer: "" });
  };

  useEffect(() => {
    generateCaptcha();
  }, [shouldReset]);

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userAnswer = e.target.value;
    setCaptcha({
      ...captcha,
      userAnswer: userAnswer
    });
    
    const isValid = parseInt(userAnswer) === captcha.answer;
    onCaptchaChange(isValid, userAnswer);
  };

  return (
    <div>
      <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
        Sicherheitsfrage: Was ist {captcha.question}? *
      </label>
      <Input
        id="captcha"
        name="captcha"
        type="number"
        required
        value={captcha.userAnswer}
        onChange={handleCaptchaChange}
        className="w-full"
        placeholder="Antwort eingeben"
      />
    </div>
  );
};
