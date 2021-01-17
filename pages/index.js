import { useState } from 'react'
function Home() {
  return <div><h1>Eu sou a home-page</h1>  <Contador /></div>
}

function Contador() {
  const [contador, setContador] = useState(1)
  function add() {
    setContador(contador + 1)      
  }

  return (
    <div>
      <h3> contagem! {contador}</h3>
      <button onClick={add}>contador</button>
      <h3>ReTeste!</h3>
    </div>
  )

}

export default Home