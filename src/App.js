
import './App.css';

function Header (props)
{

  return(
    <header>    
      <h1>{props.name} Kitchen</h1>
      <p>Copy right  {props.year}</p>
    </header>
  );
}

function Main(){

  return (
<section>

  <p>React is kinda intresting</p>
</section>
  )
}


function App() {
  return (
    <div className="App">
      <header  name = "cindy"/>
      <Main adjective = "amazing"/>
      <footer year={new Date().getFullYear()} />
      <h3> header 3 </h3>
      
    </div>
  );
}

export default App;
