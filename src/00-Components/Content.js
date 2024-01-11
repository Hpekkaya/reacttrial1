import React, { useContext } from 'react'
import { TematicData } from '../App'

const Content = () => {
  return (
    <div>
        <p>{useContext(TematicData)}</p>
        <h1>I am learning React</h1>
        <h2>Transfer data via useContext between Components</h2>
        <p>Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. </p>
        <p>Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. </p>
        <p>Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. </p>
        <p>Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. </p>
        <p>Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. Lorem ipsum dolar sit amed. </p>
    </div>
  )
}

export default Content