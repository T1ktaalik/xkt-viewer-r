
import { Viewer, XKTLoaderPlugin, BCFViewpointsPlugin } from "@xeokit/xeokit-sdk"
import './App.css'
import { useEffect, useRef } from 'react'
import useViewStore from "./view-store"


function App() {
  const theElement = useRef(null)

  const { view, setView } = useViewStore()
  let bcfViewpoints: any = undefined
  const getView = function () {
    if (bcfViewpoints) {
     /*  console.log(bcfViewpoints.getViewpoint({ snapshot: false })) */
     
      setView(bcfViewpoints.getViewpoint({ snapshot: false }))
      console.log(view)
    }
  }
   

  useEffect(() => {

    const viewer = new Viewer({
      canvasElement: theElement.current
    })

    const xktLoaderPlugin = new XKTLoaderPlugin(viewer)
    bcfViewpoints = new BCFViewpointsPlugin(viewer)

    const theScene = xktLoaderPlugin.load({
      id: "the-id",
      src: "geometry.xkt",
      edges: true
    })
    theScene.on("loaded", () => {
      
    })
  })
  return (
    <>
      <button onClick={getView} className="absolute top-0 left-1/2 z-20">ВИД!</button>
      <canvas id="the-canvas" className="absolute h-screen w-screen z-10" ref={theElement}></canvas>
      <div className="absolute top-0 right-0 z-20 h-[300px] w-[300px] bg-red-100">
    
      </div>
    </>
  )
}

export default App
