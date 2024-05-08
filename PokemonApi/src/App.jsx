import { useState } from 'react'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon></Pokemon>
    </>
  )
}

export default App
