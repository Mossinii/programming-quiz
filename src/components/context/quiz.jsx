 import { createContext } from "react";

 export const QuizContext = createContext();

 export const QuizProvider = ({chilren})=> {
const value= {};

return <QuizContext.Provider value={value}> { chilren } </QuizContext.Provider>;
     }