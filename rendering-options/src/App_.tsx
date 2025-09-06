import { useState, useRef, useEffect } from 'react'
import './App.css'
import {
  Viewer,
  XKTLoaderPlugin,
  AmbientLight,
  DirLight,
  LightMap,
  ReflectionMap,
  PointLight,
  ImagePlane,
  StoreyViewsPlugin
} from "@xeokit/xeokit-sdk";
import { Shadow } from '@xeokit/xeokit-sdk/src/viewer/scene/lights/Shadow.js'
import { Select } from 'antd'
import { create } from 'zustand'
function App() {

  const theCanvas = useRef(null)
  const viewer: React.RefObject<any> = useRef(null)

  interface PiecesState {
    pieces: Array<Object> | []
    pushPiece: (newPiece: string) => void
  }

  const useStore = create<PiecesState>((set) => ({
    pieces: [],
    pushPiece: (newPiece: string) => 
    {
      set((state) => ({ pieces: [...state.pieces, newPiece]}))  
    }
    }))

  /* const pieces = useStore(state => state.pieces)
  const pushPiece = useStore(state => state.pushPiece)
 */
const pushPiece = useStore((state)=> state.pushPiece)
const pieces = useStore((state)=> state.pieces)
console.log(pieces)
console.log(pushPiece)
  useEffect(() => {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current
    })
    viewer.current.scene.clearLights()
    new AmbientLight(viewer.current.scene, {
      color: [0.999, 0.999, 0.999],
      intensity: 0.6
    });
    new Shadow(viewer.current.scene, {
      intensity: 0.99999999
    })
    new DirLight(viewer.current.scene, {
      id: "keyLight",
      dir: [0.8, -0.6, -0.8],
      color: [1.0, 1, 1],
      intensity: 1.0,
      space: "view"
    });
    const xktLoader = new XKTLoaderPlugin(viewer.current)
    const storeyViewsPlugin = new StoreyViewsPlugin(viewer.current);
    const model = xktLoader.load({
      id: "maz",
      src: "/models/ar/geometry.xkt",
      edges: true
    })

    model.on("loaded", () => {
      //  console.log(viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects/* ["0AmTZ$KXr4DB8sGN2V3hMD"].name */)
      console.log("the hook is running!!!")
      let x = viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects
      Object.values(x).forEach(a=> {console.log(a.name), pushPiece(a.name), console.log(pieces)})
      
    })
    new ImagePlane(viewer.current.scene, {
      src: "/333.png",
      size: 50,
      position: [0, -1, -50],
      rotation: [0, 0, 0], // X, Y and Z
      opacity: 1.0,
      collidable: false,
      gridVisible: true,
      pickable: true
    });
    model.on("loaded", () => {
      viewer.current.cameraFlight.flyTo(model)
    })
  }, [])
   useEffect(() => {
    console.log('Pieces updated:', pieces);
  }, [pieces]); // This dependency will trigger when pieces change
  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <canvas className="h-full w-full" ref={theCanvas}>
        </canvas>
        <div className="absolute top-0 right-0 z-20">
          <Select
            showSearch={true}
            placeholder="поищите"
          /* options={["aaa", "bbb"]} */
          />
        </div>
      </div>
    </>
  )
}

export default App
