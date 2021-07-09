import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

function Home({ fetchQuestions,setquestions ,handleCangeFirstName ,handleCangeLastName }) {

    const [category, setcategory] = useState(21)
    const [difficulty, setdifficulty] = useState("")

    const handleCategoryChange = (event) => {
        setcategory(event.target.value)
    }

    const handleDifficultyChange = (event) => {
        setdifficulty(event.target.value)
    }

    const history = useHistory();


    const handleClickStart = () => {
        fetchQuestions(category,difficulty)
        history.push('/quiz');

    }

    return (
        <div className="landing-form">
            <div className="heading-div">
                <h1 className="heading">QUIZZ APP</h1>
            </div>
            <div className="input-container">
                <form className="ui form">
                    <div className="twelve wide field">
                        <label className="form-ele">First Name</label>
                        <input type="text" 
                        name="first-name" 
                        placeholder="First Name"
                        onChange = {handleCangeFirstName}
                        />
                    </div>
                
                    <div className="twelve wide field">
                        <label className="form-ele">Last Name</label>
                        <input type="text" 
                        name="last-name" 
                        placeholder="Last Name"
                        onChange = {handleCangeLastName}
                        />
                    </div>
                    {/* <div className="categories"> */}
                    {/* <div className="three fields"> */}
                        <div className="twelve wide field">
                            <label className="form-ele">Category</label>
                            <select onChange={handleCategoryChange} className="ui fluid dropdown">
                                <option value="21">Sports</option>
                                <option value="9">General Knowledge</option>
                                <option value="18">Computer Science</option>
                                <option value="24">Politics</option>
                                <option value="14">Television</option>
                            </select>
                        </div>
                        <div className="twelve wide field">
                            <label className="form-ele">Difficulty</label>
                            <select onChange = {handleDifficultyChange} className="ui fluid dropdown">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                   {/* </div> */}
                   {/* </div> */}
                        <button className="ui primary button"
                        onClick={() => { handleClickStart()}}
                        >Start</button>
                </form>
            </div>
        </div>
    )
}

export default Home
