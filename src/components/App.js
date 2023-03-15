import '../styles/App.scss';
import {useEffect, useState} from 'react';
import Header from './header/Header';
import Dummy from './dummy/Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';


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

  const handleChangeLastLetter = (event) =>{
    const inputValue = event.target.value;
    if(isValidname(inputValue)){
      setlastLetter(inputValue);
      setuserLetters ([...userLetters, inputValue]);
    
    }else{
    }

  }
  
  const isValidname = (name) =>{
    return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/.test(name);
  }
 

  return    ( <div className="page">
    <Header/> 
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters}/>
          <ErrorLetters word={word} userLetters={userLetters} renderErrorLetters={renderErrorLetters}/>

          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleChangeLastLetter}
            />
          </form>
        </section>
        <Dummy numberOfErrors= {numberErrors}/>
        <button onClick={handleClickIncrementar} className="button">Incrementar</button>
      
      </main>
    </div>)
}

export default App;
