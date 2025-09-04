import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import {Shadow} from '@xeokit/xeokit-sdk/src/viewer/scene/lights/Shadow.js'
function App() {
  const [count, setCount] = useState(0)
  const theCanvas = useRef(null)
  const viewer: React.RefObject<any> = useRef(null)

  useEffect(()=> {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current
    })

    viewer.current.scene.clearLights()

  /*       new PointLight(viewer.current.scene, {
        id: "light1",
        pos: [1,1, 1],
        color: [0.99999, 0.99999, 0.99999],
        intensity: 1.0,
        space: "view"
    });

    new AmbientLight(viewer.current.scene, {
     color: [0.999, 0.999, 0.999],
     intensity: 0.2
}); */


    new DirLight(viewer.current.scene, {
        id: "keyLight",
        dir: [0.8, -0.6, -0.8],
        color: [1.0, 0.8, 0.8],
        intensity: 1.0,
        space: "view"
    });

    new DirLight(viewer.current.scene, {
        id: "fillLight",
        dir: [-0.8, -0.4, -0.4],
        color: [0.8, 1.0, 0.8],
        intensity: 1.0,
        space: "view"
    });

    new DirLight(viewer.current.scene, {
        id: "rimLight",
        dir: [0.2, -0.8, 0.8],
        color: [0.8, 0.8, 1.0],
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

    model.on("loaded", ()=> { console.log(viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects["0AmTZ$KXr4DB8sGN2V3hMD"].name)}) 


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
