import React from 'react'
import '../layout/Card.css'

function Card(props){
    return(
        <div className="card-app">
            <div className="content">
                <h2><a href="">{props.title}</a></h2>
                <h2><a href="">{props.children}</a></h2>
            </div>
            
        </div>
    )
}
export default Card