 
import { Viewer, XKTLoaderPlugin, BCFViewpointsPlugin } from "@xeokit/xeokit-sdk"
import './App.css'
import { useEffect } from 'react'
import useViewStore from "./view-store"

let setTheView = function () { console.log('xoxoxxo') }
function App() {
 const { view, setView } = useViewStore() 
  useEffect(()=> {
   
    const viewer = new Viewer({
      canvasId: "the-canvas" 
    })
   
    const xktLoaderPlugin = new XKTLoaderPlugin(viewer)
    const bcfViewpoints = new BCFViewpointsPlugin(viewer)

    const theScene =xktLoaderPlugin.load({
      id: "the-id",
      src: "geometry.xkt"
    })
    theScene.on("loaded", ()=> { 
      setView(bcfViewpoints.getViewpoint({snapshot: false}))
      })
  })
  return (
    <>
  <button className="absolute top-0 right-1/2 bg-red z-20 bg-green-200 p-[10px]" onClick={() => {
    console.log()
  }} >The state</button>
      <canvas id="the-canvas" className="absolute h-screen w-screen z-10"></canvas>
 
    </>
  )
}

export default App
