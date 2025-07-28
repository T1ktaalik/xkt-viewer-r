import { useState } from 'react'
import { Viewer, XKTLoaderPlugin, BCFViewpointsPlugin } from "@xeokit/xeokit-sdk"
import './App.css'
import { useEffect } from 'react'
function App() {
  const [ view, setView ] = useState()
  useEffect(()=> {
    const viewer = new Viewer({
      canvasId: "the-canvas" 
    })

    const xktLoaderPlugin = new XKTLoaderPlugin(viewer)
    const bcfViewpoints = new BCFViewpointsPlugin(viewer)
    xktLoaderPlugin.load({
      id: "the-id",
      src: "geometry.xkt"
    })
  })
  return (
    <>
  <button className="absolute top-0 right-1/2 bg-red z-20 bg-green-200 p-[10px]" >The state</button>
      <canvas id="the-canvas" className="absolute h-screen w-screen z-10"></canvas>
 
    </>
  )
}

export default App
