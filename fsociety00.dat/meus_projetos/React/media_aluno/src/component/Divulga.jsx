import React from 'react' 
import '../layout/style.css'

export default function Divulga(props){
    return(
        <div className="divulgacao"> 
            <h1>{props.children}</h1>
        </div>
    )
}