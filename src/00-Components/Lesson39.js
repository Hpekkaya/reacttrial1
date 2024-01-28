import React from 'react'

function FirstGoal() {
    return <p>My main goal: Learn React in-depth and from the ground up </p>;
  }
  
  function SecondGoal() {
    return (
      <div>
        <h1>Time to Practice!</h1>
        <p>
          Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
          text.
        </p>
        <p>
          <strong>Also important:</strong> For the automatic checks to succeed,
          you <strong>must export</strong> your custom component function! Not as
          a default but simply by adding the <code>export</code> keyword in front
          of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
          ).
        </p>
        
      </div>
    );
  }


const Lesson39 = () => {
  return (
    <div>
      <SecondGoal />
      <FirstGoal />
    </div>
  )
}

export default Lesson39