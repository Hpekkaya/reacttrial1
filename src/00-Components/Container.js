import React from 'react'

const Container = (props) => {
  return (
    <div style={{width:"300px", height:"300px",border:"2px solid brown", margin:"0px, auto"}}>
        <p>{props.title}</p>
        <p>{props.num}</p>
    </div>
  )
}

export default Container