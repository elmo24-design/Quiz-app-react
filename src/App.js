import { useState } from 'react';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
//components
import Header from './components/Header'
import Modal from './components/Modal'
//views
import Home from './views/Home'
import Question1 from './views/Question1'
import Question2 from './views/Question2'
import Question3 from './views/Question3'
import Question4 from './views/Question4'
import Question5 from './views/Question5'
import Question6 from './views/Question6'
import Question7 from './views/Question7'
import Question8 from './views/Question8'
import Question9 from './views/Question9'
import Question10 from './views/Question10'
import Final from './views/Final'

import { AnimatePresence } from 'framer-motion'; 

function App() {
   const location = useLocation()
   const history = useHistory()

   const [showModal,setShowModal] = useState(false)
   const [showModal1, setShowModal1] = useState(false)
   const [showModal2, setShowModal2] = useState(false)
   const [showModal3, setShowModal3] = useState(false)
   const [showModal4, setShowModal4] = useState(false)
   const [showModal5, setShowModal5] = useState(false)
   const [showModal6, setShowModal6] = useState(false)
   const [showModal7, setShowModal7] = useState(false)
   const [showModal8, setShowModal8] = useState(false)
   const [showModal9, setShowModal9] = useState(false)
   const [showModal10, setShowModal10] = useState(false)

   const answers = [
      'A. Node JS', 
      'C. Event-Driven Programming', 
      'A. Representational State Transfer',
      'A. var http = require("http");',
      'C. Both of the above',
      'C. fs.ftruncate(fd, len, callback)',
      'B. to get the last result.',
      'D. All of the Above',
      'A. net.createServer([options][, connectionListener])',
      'B. Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.'
   ]
  
   let [headingDesc, setHeadingDesc] = useState('')
   let [subHeadDesc, setSubHeadDesc] = useState('')
   let [backColor, setBackColor] = useState('')
   let [correctIcon, setCorrectIcon] = useState(false)
   let [wrongIcon, setWrongIcon] = useState(false)
   let [score, setScore] = useState(0)

   const [ansOne, setAnsOne] = useState('');
   const [ansTwo, setAnsTwo] = useState('');
   const [ansThree, setAnsThree] = useState('');
   const [ansFour, setAnsFour] = useState('');
   const [ansFive, setAnsFive] = useState('');
   const [ansSix, setAnsSix] = useState('');
   const [ansSeven, setAnsSeven] = useState('');
   const [ansEight, setAnsEight] = useState('');
   const [ansNine, setAnsNine] = useState('');
   const [ansTen, setAnsTen] = useState('');

   //first question
   const checkAnsOne = (ans) => {
      if(ans === answers[0]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal1(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[0]}. Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal1(true)
      }
   }
   const handleChangeOne = (event) => {
      setAnsOne(event.target.value);
   };

   //2nd Question
   const checkAnsTwo = (ans) => {
      if(ans === answers[1]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal2(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[1]}. Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal2(true)
      }
   }
   const handleChangeTwo = (event) => {
      setAnsTwo(event.target.value);
   };

   //3rd Question
   const checkAnsThree = (ans) => {
      if(ans === answers[2]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal3(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[2]}. Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal3(true)
      }
   }
   const handleChangeThree = (event) => {
      setAnsThree(event.target.value);
   };

   //4th Question
   const checkAnsFour = (ans) => {
      if(ans === answers[3]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal4(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[3]}. Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal4(true)
      }
   }
   const handleChangeFour = (event) => {
      setAnsFour(event.target.value);
   };

   //5th Question
   const checkAnsFive = (ans) => {
      if(ans === answers[4]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal5(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[4]}.Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal5(true)
      }
   }
   const handleChangeFive = (event) => {
      setAnsFive(event.target.value);
   };

   //6th Question
   const checkAnsSix = (ans) => {
      if(ans === answers[5]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal6(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[5]}.Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal6(true)
      }
   }
   const handleChangeSix = (event) => {
      setAnsSix(event.target.value);
   };

   //7th Question
   const checkAnsSeven = (ans) => {
      if(ans === answers[6]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal7(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[6]}.Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal7(true)
      }
   }
   const handleChangeSeven = (event) => {
      setAnsSeven(event.target.value);
   };

   //8th Question
   const checkAnsEight = (ans) => {
      if(ans === answers[7]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal8(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[7]}.Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal8(true)
      }
   }
   const handleChangeEight = (event) => {
      setAnsEight(event.target.value);
   };

   //9th Question
   const checkAnsNine = (ans) => {
      if(ans === answers[8]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal9(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[8]}.Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal9(true)
      }
   }
   const handleChangeNine = (event) => {
      setAnsNine(event.target.value);
   };

   //10th Question
   const checkAnsTen = (ans) => {
      if(ans === answers[9]){
         setScore(score+=1)
         setHeadingDesc('Correct!')
         setSubHeadDesc(`Your current score is: ${score}/10`)
         setCorrectIcon(true)
         setWrongIcon(false)
         setBackColor('correct')
         setShowModal(true)
         setShowModal10(true)
      }else{
         setHeadingDesc('Wrong!')
         setSubHeadDesc(`The correct answer is ${answers[9]}.Your Current Score is: ${score}/10`)
         setWrongIcon(true)
         setCorrectIcon(false)
         setBackColor('wrong')
         setShowModal(true)
         setShowModal10(true)
      }
   }
   const handleChangeTen = (event) => {
      setAnsTen(event.target.value);
   };

   //Try Again
   const tryAgain = () => {
      setShowModal1(false)
      setShowModal2(false)
      setShowModal3(false)
      setShowModal4(false)
      setShowModal5(false)
      setShowModal6(false)
      setShowModal7(false)
      setShowModal8(false)
      setShowModal9(false)
      setShowModal10(false)
      setScore(0)
      setHeadingDesc('')
      setSubHeadDesc('')
      setBackColor('')
      setCorrectIcon(false)
      setWrongIcon(false)
   
      setAnsOne('')
      setAnsTwo('')
      setAnsThree('')
      setAnsFour('')
      setAnsFive('')
      setAnsSix('')
      setAnsSeven('')
      setAnsEight('')
      setAnsNine('')
      setAnsTen('');

      history.push('/')
   }

  return (
    <div className="App">
      <Header />
      <Modal
         correctIcon={correctIcon}
         wrongIcon={wrongIcon} 
         showModal={showModal}
         headingDesc={headingDesc} 
         subHeadDesc={subHeadDesc}
         backColor={backColor} 
      />
      <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => setShowModal(false)}
      >
         <Switch location={location} key={location.key}>
            <Route path="/q1">
               <Question1
                  showModal1={showModal1}
                  setShowModal1={setShowModal1} 
                  ansone={ansOne} 
                  handleChangeOne={handleChangeOne} 
                  checkAnsOne={checkAnsOne}
               />
            </Route>
            <Route path="/q2">
               <Question2 
                  showModal2={showModal2} 
                  anstwo={ansTwo} 
                  handleChangeTwo={handleChangeTwo} 
                  checkAnsTwo={checkAnsTwo}
               />
            </Route>
            <Route path="/q3">
               <Question3 
                  showModal3={showModal3} 
                  ansthree={ansThree} 
                  handleChangeThree={handleChangeThree} 
                  checkAnsThree={checkAnsThree}
               />
            </Route>
            <Route path="/q4">
               <Question4 
                  showModal4={showModal4} 
                  ansfour={ansFour} 
                  handleChangeFour={handleChangeFour} 
                  checkAnsFour={checkAnsFour}
               />
            </Route>
            <Route path="/q5">
               <Question5 
                  showModal5={showModal5} 
                  ansfive={ansFive} 
                  handleChangeFive={handleChangeFive} 
                  checkAnsFive={checkAnsFive}
               />
            </Route>
            <Route path="/q6">
               <Question6 
                  showModal6={showModal6} 
                  anssix={ansSix} 
                  handleChangeSix={handleChangeSix} 
                  checkAnsSix={checkAnsSix}
               />
            </Route>
            <Route path="/q7">
               <Question7 
                  showModal7={showModal7} 
                  ansseven={ansSeven} 
                  handleChangeSeven={handleChangeSeven} 
                  checkAnsSeven={checkAnsSeven}
               />
            </Route>
            <Route path="/q8">
               <Question8 
                  showModal8={showModal8} 
                  anseight={ansEight} 
                  handleChangeEight={handleChangeEight} 
                  checkAnsEight={checkAnsEight}
               />
            </Route>
            <Route path="/q9">
               <Question9 
                  showModal9={showModal9} 
                  ansnine={ansNine} 
                  handleChangeNine={handleChangeNine} 
                  checkAnsNine={checkAnsNine}
               />
            </Route>
            <Route path="/q10">
               <Question10 
                  showModal10={showModal10} 
                  ansten={ansTen} 
                  handleChangeTen={handleChangeTen} 
                  checkAnsTen={checkAnsTen}
               />
            </Route>
            <Route path="/final">
               <Final 
                  score={score}
                  tryAgain={tryAgain}
               />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
