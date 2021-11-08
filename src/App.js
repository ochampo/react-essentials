
import './App.css';


function Header (props)
{

  return(
    <header>
      <h1>{props.name} Testing</h1>
    </header>
  );
}

function Main(props){

  return (
<section>

  <p style={{textAlign: "left"}} >{props.adjective} </p>
  <ul style={{textAlign: "left"}}>
  {props.benefitsOfFunctionalCode.map((benefitsOfFunctionalCode) =>(
  
  <li key={benefitsOfFunctionalCode.id}>{benefitsOfFunctionalCode.title}</li>
  ))}
  </ul>
</section>
  );
}
function Footer(props){

  return (
<section>

  <footer>Copyright {props.year} </footer>
</section>
  )
}

const benefitsOfFunctionalCode = [
  "Cleaner Code",
  "makes debugging easier",
  "Dynamic"
  ];

  const ObjectsOfBenefitsOfFunctional = benefitsOfFunctionalCode.map((benefitsOfFunctionalCode,i) => ({id:i, title: benefitsOfFunctionalCode}))
  //console.log(ObjectsOfBenefitsOfFunctional)


function secretTest(){

  return <h1> test </h1>
}

function viewable()
{
return <h1>test visable for anyone</h1>

}

function App() {
  const [emtion ]
  
  
}

export default App;
