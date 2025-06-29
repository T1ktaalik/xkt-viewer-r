import { useState } from 'react'
import TheViewer from './components/TheViewer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheViewer/>
    </>
  )
}

export default App
