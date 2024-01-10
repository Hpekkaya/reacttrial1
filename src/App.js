import { useState } from 'react';
import Props from './01-Props/Props';
import './App.css';
import Container from './00-Components/Container';

function App() {

  const [header, setHeader]=useState("I am learning React")
  const number = 1970

  return (
    <div className="App">      
        
      <Container title = {header} num = {number} />  
      
    </div>
  );
}

// function Container(props){
//   return(
//     <div style={{width:"300px", height:"300px",border:"2px solid brown", margin:"0px, auto"}}>
//       <p>{props.title}</p>
//       <p>{props.num}</p>
//     </div>
//   )
// }


export default App;
