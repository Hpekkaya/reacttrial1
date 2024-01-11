import React from 'react'
import Header from '../01-Props/Header'

const Container = (props) => {
  return (
    <div style={{width:"300px", height:"300px",border:"2px solid brown", margin:" auto"}}>
          <Header header={props.title}>I am coming from Child Componenet</Header>
    </div>
  )
}

export default Container