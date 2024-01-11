import React from 'react'

const Header = (props) => {
  return (
    <div style={{width:"inherit", height:"50px", backgroundColor:"black",color:"white"}}>
        {props.header} <br></br>
        {props.children}
    </div>
  )
}

export default Header