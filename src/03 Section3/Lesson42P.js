import React from 'react'

export const userData ={
    firstName : "Hakan",
    lastName : "Pekkaya",
    title : "Front Hand Developper"
}

export function User(){
    <div id="user">
        <h2> ToDo :{userData.firstName} {userData.lastName} </h2>
        <p> ToDo {userData.title}</p>
    </div>
}

const Lesson42P = () => {
  return (
    <div>
        <h1>Time to Practice React</h1>
        <p>Welcome on Booard</p>
        <User/>
    </div>
  )
}

export default Lesson42P