
import { Viewer, XKTLoaderPlugin, BCFViewpointsPlugin } from "@xeokit/xeokit-sdk"
import './App.css'
import { useEffect, useRef } from 'react'
import useViewStore from "./view-store"

let setTheView = function () { console.log('xoxoxxo') }
function App() {
  const theElement = useRef(null)

  const { view, setView } = useViewStore()
  let bcfViewpoints: any = undefined
  const getView = function () {
    if (bcfViewpoints) {
     /*  console.log(bcfViewpoints.getViewpoint({ snapshot: false })) */
     console.log(view)
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
      src: "geometry.xkt"
    })
    theScene.on("loaded", () => {
      setView(bcfViewpoints.getViewpoint({ snapshot: false }))
      console.log(view)
    })
  })
  return (
    <>
      <button onClick={getView} className="absolute top-0 left-1/2 z-20">ВИД!</button>
      <canvas id="the-canvas" className="absolute h-screen w-screen z-10" ref={theElement}></canvas>

    </>
  )
}

export default App
