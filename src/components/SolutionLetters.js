import '../styles/components/_letters.scss';

const SolutionLetters = (props) =>{

    const renderSolutionLetters = () =>{
      const wordLetters = props.word.split('');
      return wordLetters.map((eachLetter, index) =>{
        if(props.userLetters.includes(eachLetter)){
          return (<li className='letter' key={index}>{eachLetter}</li>);
        }else{
          return (<li className='letter' key={index}></li>);
        };
      } )
    }

    return (
        <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
        
          </div>
    )
}

export default SolutionLetters;