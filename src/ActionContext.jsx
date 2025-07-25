import { createContext, useState } from "react";
import { cardSet } from "./questions";

export const ActionContext = createContext();

export const ActionProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const nextCard = () => {
    if (index < cardSet.length - 1) {
      setIndex(index + 1);
      setReveal(false);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setReveal(false);
    }
  };

  const toggleCard = () => {
    setReveal(!reveal);
  };

  const front = cardSet[index].front;
  const back = cardSet[index].back;

  return (
    <ActionContext.Provider
      value={{ index, reveal, nextCard, prevCard, toggleCard, front, back, correctAnswers, setCorrectAnswers }}
    >
      {children}
    </ActionContext.Provider>
  );
};
