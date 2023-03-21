import '../styles/App.scss';
import {useEffect, useState} from 'react';
import Header from './header/Header';
import Dummy from './dummy/Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import {Route, Routes} from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';



function App() {

  const [numberOfErrors,setNumberOfErrors] = useState(0); 
  const [lastLetter,setlastLetter] = useState(''); 
  const [word,setWord] = useState(''); 
  const [userLetters,setuserLetters] = useState([]); 

useEffect(() => {
    fetch('https://dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((responseData) => {
        setWord(responseData.word);
      });
  }, []);


  const renderErrorLetters = () =>{
    return userLetters
      .filter((eachLetter) => !(word.includes(eachLetter)))
      .map( (eachLetter, index) => {return <li className="letter" key={index}>{eachLetter}</li>})
  }

  const counterErrorLetters = () =>{
    return userLetters
      .filter((eachLetter) => !(word.includes(eachLetter)))
      .length 
  }

  const numberErrors = counterErrorLetters();

  const handleClickIncrementar= ()=> {
    setNumberOfErrors(numberOfErrors+1);
  }

  const lifting = (value) => {
    if (isValidname(value)) {
      setlastLetter(value);
      setuserLetters([...userLetters, value]);
    
    }else{
    }
  }


  const handleChangeLifting = (value) =>{
    setWord(value);
    setlastLetter('');
    setuserLetters('');
  }
  
  const isValidname = (name) =>{
    return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/.test(name);
  }
 

  return    ( <div className="page">
    <Header/> 
      <main className="main">
        <Routes>
          <Route
            path="/A Jugar"
            element={
              <>
              <SolutionLetters word={word} userLetters={userLetters}/>
              <ErrorLetters word={word} userLetters={userLetters} renderErrorLetters={renderErrorLetters}/>
              <Form lifting={lifting}/>
              <Dummy numberOfErrors= {numberErrors}/>
              <button onClick={handleClickIncrementar} className="button">Incrementar</button>
             </>
            }
          />
          <Route
            path="/Instructions"
            element={
            <>
              <Instructions/>
             </>
            }
          />
          <Route
            path="/Options"
            element={
            <>
              <Options handleChangeLifting={handleChangeLifting}/>
             </>
            }

          />
       
        

        </Routes>
      </main>

    <Footer />

  </div>
  )
}

export default App;
