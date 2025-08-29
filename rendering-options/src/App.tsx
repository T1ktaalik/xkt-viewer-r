import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Viewer,
  XKTLoaderPlugin,
} from "@xeokit/xeokit-sdk";
function App() {
  const [count, setCount] = useState(0)
  const theCanvas = useRef(null)
  const viewer: React.RefObject<any> = useRef(null)

  useEffect(()=> {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current
    })
    const xktLoader = new XKTLoaderPlugin(viewer.current)
    const model = xktLoader.load({
      id: "maz",
      src: "/models/ar/geometry.xkt",
      edges: false
    })

    model.on("loaded", () => {
      console.log("model loaded")
       viewer.current.cameraFlight.flyTo(model)
    })
  }, [])


  return (
    <>
    <div className="h-screen w-screen overflow-hidden">
      <canvas className="h-full w-full" ref={theCanvas}>

      </canvas>
    </div>
    </>
  )
}

export default App
