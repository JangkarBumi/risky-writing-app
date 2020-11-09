import React,{useContext,useState} from 'react'

const WordContext = React.createContext()


export function useWordContext() {
  return useContext(WordContext);
}

export function WordProvider({children}){
const wordGoalOption = [150, 250, 500, 750, 1000];

const [wordGoal, setWordGoal] = useState(wordGoalOption[2]);

const value ={
  wordGoalOption,
  wordGoal,
  setWordGoal
}

return (
  <WordContext.Provider value={value}>
    {children}
  </WordContext.Provider>
);
}