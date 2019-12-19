//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0)
const [awayScore, setAwayScore] = useState(0)
const [currentHalf, setCurrentHalf] = useState(0)

const [seconds,setSeconds] = useState(0)
const [tensSeconds,setTensSeconds] = useState(0)
const [minutes,setMinutes] = useState(0)
const [tensMinutes,setTensMinutes] = useState(0)

const [time, setTime] = useState(`${tensMinutes}${minutes}:${tensSeconds}${seconds}`)




const homeGoal = e => {
  
  setHomeScore(homeScore + 1);
}

const awayGoal = e => {
  
  setAwayScore(awayScore + 1);
}

const timer = e => {
  
  setTime(time + 1);
}


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Real Madrid</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">Barça</h2>
            <div className="away__score">{awayScore}</div>
          </div>
          
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeGoal} className="homeButtons__Goal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayGoal} className="awayButtons__Goal">Away Field Goal</button>
        </div>
        <div className="halfButton">
          <button onClick={setCurrentHalf} className="halfButton__setCurrentHalf">Half</button>
        </div>
      </section>
    </div>
  );
}

export default App;
