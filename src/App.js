import React ,{useState, useEffect} from "react";
import './App.css';


//https://api.github.com/users

function App({login}) {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
useEffect(() => {
  if(!login) return;
  setLoading(true);
  fetch(`https://api.github.com/users/${login}`)
  .then((response) => response.json())
  .then(setData)
  .then(() => setLoading(false))
  .catch(setError);

},[login]);

if(loading) return <h1> loading ...</h1>
if(error) return <pre>{JSON.stringify(error,null,2)}</pre>
if(!data) return null;
if(data)
{
  //return <div>{JSON.stringify(data)}</div>
  return(
  <div>
    <h1>{data.name}</h1>
    <p>{data.location}</p>
    <img alt = {data.login} src = {data.avatar_url} />
  </div>
  );
}

return <div>No user data</div>


}
    
export default App;
