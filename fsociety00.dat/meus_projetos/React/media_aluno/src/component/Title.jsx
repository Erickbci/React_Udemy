import React from 'react'
import '../layout/style.css'

function Title(props){
    return(
        <div className="title-app"> 
            <h1 >{props.title}</h1>
            <h2 >{props.subtitle}</h2>
            <h3>{props.children}</h3>
        </div>
    )
}
export default Title