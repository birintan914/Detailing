import { useState } from 'react'
import Nav from './components/nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Nav/>
    </>
  )
}

export default App
