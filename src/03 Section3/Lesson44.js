import React from 'react'
import reactImage from "../assets/react-core-concepts.png";
import {CORE_CONCEPTS} from './data44'

function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }
  
  function Header() {
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
    }

const Lesson44 = () => {
  return (
    <div>
        <Header/>
        <CoreConcept
            title={CORE_CONCEPTS[0].title} 
            description="The core UI building block."
            img={componentsImg}
        />
    </div>
  )
}

export default Lesson44
