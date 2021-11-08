import React ,{useState, useEffect, useReducer} from "react";
import './App.css';




function App() {
const [checked, setChecked] = useState(false);
const [checked2, toggle2] = useReducer(
  (checked2) => !checked2,
  false
  );
  
function toggle1(){
  setChecked ((checked) => !checked)
}


return(
 
<>
<input type="checkbox" 
Value={checked2} 
onChange={toggle2}
/>
<p> {checked2 ? "checked":"not checked"} </p>  
</>
);
}
  
  


export default App;
