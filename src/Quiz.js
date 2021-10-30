import React from 'react'
import axios from 'axios'
import CountDownTimer from './CountDownTimer'
import { useEffect,useState } from 'react'
const Quiz = () => {
    const hoursMinSecs = {hours:0, minutes: 0, seconds: 10};
    const [questions,setQuestions] = useState(0);
    const [hide,setHide] = useState(false);
    const [stop,setStop] = useState(false);

    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:1337/Quizzes',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setQuestions(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },[])
    
    return (
        <>
        <div style={{display:hide ? "none":"block"}}>
            Question : {questions[0]?.Question_Answer? questions[0]?.Question_Answer[0]?.Q:""}
            <div>A: {questions[0]?.Question_Answer[0]?.O?.A}</div>
            <div>B: {questions[0]?.Question_Answer[0]?.O?.B}</div>
            <div>C: {questions[0]?.Question_Answer[0]?.O?.C}</div>
            <button onClick={()=>{setStop(true)}}>Stop here</button>
        </div>
        <div>
        <CountDownTimer hoursMinSecs={hoursMinSecs} stopper = {stop}/>
        </div>
        </>
    )
}

export default Quiz
