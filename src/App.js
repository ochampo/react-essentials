
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

function App() {
  return (
    <div className="App">
      <Header name="Daniel" />
      <Main adjective = "The benefit of functional code is " benefitsOfFunctionalCode={ObjectsOfBenefitsOfFunctional} />
      <Footer year = {new Date().getFullYear()} />
      
      
      
    </div>
  );
}

export default App;
