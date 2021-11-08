import React ,{useState, useEffect} from "react";
import './App.css';




function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Sleepy");

  useEffect (() => {

console.log(`It's ${emotion} arround here!`);

  },[emotion]);

  
  useEffect (() => {

    console.log(`It's ${secondary} arround here!`);
    
      },[secondary]);
  return(
<>
 <h1>current emotion is {emotion}, and {secondary}.</h1>
<button onClick={()=> setEmotion("Happy")}>Happy</button>
<button onClick={()=> setEmotion("fustrated")}>Fustrate</button>
<button onClick={()=> setEmotion("Eaze")}>Eaze</button>
<button onClick={()=> setEmotion("Enthusiastic")}>Enthuse</button>
<button onClick={()=> setSecondary("Cranky")}>Cranky</button>

</>

);
  
  //[emtion, setEmotion ] = useState();
  
  
}

export default App;
