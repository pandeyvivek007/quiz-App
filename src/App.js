import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Nav from './components/Nav';
import Profile from './components/Profile';
import Home from './components/Home';
import {useState} from 'react'
import axios from 'axios'
import Quiz from './components/Quiz';



function App() {

const [questions, setquestions] = useState([])
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [score, setscore] = useState(0)


const fetchQuestions = async (category , difficulty) => {
  const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
  setquestions(res.data.results)
  setscore(0)
}

const handleCangeFirstName = (event) => {
    setfirstName(event.target.value)
}

const handleCangeLastName = (event) => {
    setlastName(event.target.value)
}

  return (
    <div className="App">
       
       <Router>
          <Nav/>
          <Switch>
            <Route exact path='/'>
              <Home 
              fetchQuestions = {fetchQuestions}
              handleCangeFirstName = {handleCangeFirstName}
              handleCangeLastName = {handleCangeLastName}
              />
            </Route>
            <Route path='/quiz' >
              <Quiz 
              questions = {questions.length>0 && questions}
              firstName = {firstName}
              setscore = {setscore}
              score = {score}
              />
            </Route>
            <Route path='/profile'>
              <Profile 
              firstName = {firstName} 
              score = {score}
              />
            </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
