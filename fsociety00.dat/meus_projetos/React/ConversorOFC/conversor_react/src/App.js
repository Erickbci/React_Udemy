import './App.css'

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>

      <div className="linha">
        <Conversor valueA="USD" valueB="BRL"></Conversor>
        <Conversor valueB="BRL" valueA="USD"></Conversor>
      </div>

      <div className="linha">
        <Conversor valueA="CAD" valueB="BRL"></Conversor>
        <Conversor valueB="BRL" valueA="CAD"></Conversor>
      </div>

      <div className="linha">
        <Conversor valueA="EUR" valueB="BRL"></Conversor>
        <Conversor valueB="BRL" valueA="EUR"></Conversor>
      </div>
    </div>
  )
}

export default App
