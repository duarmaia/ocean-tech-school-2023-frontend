import './App.css'
import Card from './componentes/Card/Card'
function App() {
 

  return (
    <>
    <Card /> 
      <div className="card">
      <h2>Ricky Sanchez</h2>
      <div className="tags">
        <div className="tag">Status: Vivo</div>
        <div className="tag">Espécie:Humana</div>
        <div className="tag">Origem:Terra C-137</div>
      </div> 
      <img src="data:image/jpeg;base64,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" alt="" />
      </div>
     
    </>
  )
}

export default App
