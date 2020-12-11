import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {useWordContext} from '../context/WordContext'

const Landing = () => {


const {wordGoalOption,wordGoal,setWordGoal} = useWordContext()
  return (
    <div>
      <h2>Don't stop typing, or all is lost.</h2>

    <div>
    <button onClick={() => setWordGoal(wordGoalOption[0])}>150</button>
    <button onClick={() =>setWordGoal(wordGoalOption[1])}>250</button>
    <button onClick={() => setWordGoal(wordGoalOption[2])}>500</button>
    <button onClick={() => setWordGoal(wordGoalOption[3])}>750</button>
    <button onClick={() => setWordGoal(wordGoalOption[4])}>1000</button>
  <h3>Goal : {wordGoal} Words</h3>
    </div>
      <Link to="/risky-writing-app/write">Start Writing</Link>
    </div>
  )
}

export default Landing
