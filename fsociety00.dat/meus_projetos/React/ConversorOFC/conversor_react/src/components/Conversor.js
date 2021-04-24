import React, { Component, useState } from 'react'

import './Conversor.css'

const Conversor = (props) => {
  const [moedaA, setMoedaA] = React.useState(0)
  const [moedaB, setMoedaB] = useState(0)
  const [locate, setLocate] = useState(null)

  const converter = () => {
    let de_para = `${props.valueA}-${props.valueB}`
    // console.log(de_para)
    let url = ` https://economia.awesomeapi.com.br/all/${de_para}`

    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(moedaA)
        let cotacao = json[props.valueA].high
        let moedaB = (parseFloat(moedaA) * cotacao).toFixed(2)
        //  this.setState({ moedaB })
        setMoedaB(moedaB)
      })
  }
  // const disparar = ()=>{
  //   converter('us');
  //   converter();
  //   converter();
  //   converter();
  //   converter();
  // }
  return (
    <div className="conversor">
      <h2>
        {props.valueA} para {props.valueB}
      </h2>
      <input
        type="text"
        onChange={(event) => {
          setMoedaA(event.target.value)
        }}
      ></input>
      <input type="button" value="Converter" onClick={converter}></input>
      <h2>{moedaB}</h2>
    </div>
  )
}
export default Conversor
