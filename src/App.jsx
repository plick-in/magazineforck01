import { useState } from 'react'
import Data from './components/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Data/>
    </>
  )
}

export default App
