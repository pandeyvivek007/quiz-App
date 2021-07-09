import React, { useState, useEffect }  from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

function Quiz({ questions , firstName , setscore , score}) {

    const [correctAnswer, setcorrectAnswer] = useState(null)
    const [optionArray, setoptionArray] = useState(null)
    const [questionNumber, setquestionNumber] = useState(0)
    const [btnValue, setbtnValue] = useState("Next")
    const [selectedOps, setselectedOps] = useState(false)
    const [choosen, setchoosen] = useState("")

    const history = useHistory();

    const Msg = () => {
         if(choosen === correctAnswer ){
            return <h2 className="correct-ans">Correct</h2>
         }else if(choosen === ""){
            return <h2> </h2>
         }else if(selectedOps === false && choosen !== correctAnswer){
             return (
                <div className="wrong-div" >
                    <h2 className="wrong-ans">Wrong</h2>
                    <h3 className="answer">{`The Correct Answer Is ${correctAnswer}`}</h3>
                </div>
                )
         }else{
             return <h2> </h2>
         }
        
    }

   const handleClickOption = (event) => {
        const selected = event.target.innerText
        setchoosen(selected)
        console.log(selected)
        const cor = questions && questions[questionNumber].correct_answer
        console.log(cor)
        setcorrectAnswer(cor)
        if(cor===selected && selectedOps === false){
            setscore(score+1)
            setselectedOps(true)
        }
        else if(cor !== selected){
        }
   }

        
    const handleClickNext = () => {
        if(questionNumber<9){
            setquestionNumber(questionNumber+1)
            if(questionNumber >= 8){
                setbtnValue("Result")
            }
        }
        console.log(questionNumber)
        if(btnValue === "Result"){
            history.push('/profile')
        }
        
    }
   
    const collectOptions = () => {
        const cor = questions && questions[questionNumber].correct_answer
        const arr = questions && questions[questionNumber].incorrect_answers
        
        let array = []
        array.push(cor)
        array.push(arr[0])
        array.push(arr[1])
        array.push(arr[2])

        let finalArray = []
        let occured = []
        while(finalArray.length<4){
            const rand = Math.floor(Math.random()*4)
            if(!occured.includes(rand)){
                finalArray.push(array[rand])
                occured.push(rand)
            }
        }

        setoptionArray(finalArray)
    }

    useEffect(() => {
        collectOptions()
        setselectedOps(false)
        setchoosen("")
    }, [questions,questionNumber])

    return (
        <div>
            
            <div className="parent-box">
                <div>
                    <h2 className = "name">{firstName.toUpperCase()}</h2>
                </div>
                <div>
                    <h1 className = "score">{`Your Score - ${score}`}</h1>
                </div>
                <div>
                    <Msg/>
                </div>
                <div className="question-container">
                    <div >
                        <h1 className="question-div">{questions.length>0 && questions[questionNumber].question}</h1>
                    </div>
                    <div className="options-btn">
                        <div className = {`unclicked`}>
                            <h2 
                            // className = {selection}
                            onClick = {handleClickOption}>
                                {optionArray && optionArray[0]}
                            </h2>
                        </div>
                        <div className = {`unclicked`}>
                            <h2 
                            // className = {selection}
                            onClick = {handleClickOption}>
                                {optionArray && optionArray[1]}
                            </h2>
                        </div>
                    </div>
                    <div className="options-btn">
                        <div className = {`unclicked`}>
                            <h2 
                            // className = {selection}
                            onClick = {handleClickOption}>
                                {optionArray && optionArray[2]}
                            </h2>
                        </div>
                        <div className = {`unclicked`}>
                            <h2 
                            // className = {selection}
                            onClick = {handleClickOption}>
                                {optionArray && optionArray[3]}
                            </h2>
                        </div>
                    </div>
                    <div className="next-btn" onClick = {handleClickNext}>
                        <div className="ui primary button">{btnValue}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Quiz
