import React,{useState} from 'react';
import './App.css';
import Content from './00-Components/Content';

const tema={
  dark :{
    color :"white",
    backgroundColor : "black"
  },
  light :{
    color :"black",
    backgroundColor : "white"
  }
}
export const TematicData = React.createContext(); //This should assigned here (outside of function)

function App() {

  const [deger,setDeger]=useState("Kerem Nadir Pekkaya")
  function change(){
    if(tema.dark===deger) {setDeger(tema.light); console.log(deger)}
    else {setDeger(tema.dark); console.log(deger)}
  }
  
  return (
    <div className="App">      
       <button onClick={change}>
        {tema.dark ===deger ? "Light" : "Dark"}
        </button> 

      <TematicData.Provider value={deger}>
          <Content/>  
      </TematicData.Provider>


    </div>
  );
}




export default App;
