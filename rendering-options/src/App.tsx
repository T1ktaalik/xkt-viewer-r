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
  Shadow
} from "@xeokit/xeokit-sdk";
function App() {
  const [count, setCount] = useState(0)
  const theCanvas = useRef(null)
  const viewer: React.RefObject<any> = useRef(null)

  useEffect(()=> {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current
    })

    viewer.current.scene.clearLights()

    new AmbientLight(viewer.current.scene, {
     color: [0.999, 0.999, 0.999],
     intensity: 0.4
});


new ReflectionMap(viewer.current.scene, {
   src: [
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PX.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NX.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PY.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NY.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PZ.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NZ.png"
    ]
})
new LightMap(viewer.current.scene, {
   src: [
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PX.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NX.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PY.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NY.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PZ.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NZ.png"
    ]
})

new DirLight(viewer.current.scene, {
     id: "keyLight",
     dir: [0.9, -0.6, -0.8],
     color: [1.0, 0.999, 0.999],
     intensity: 1.0,
     space: "view"
});
/* 
new DirLight(viewer.current.scene, {
     id: "fillLight",
     dir: [-0.8, -0.4, -0.4],
     color: [0.3, 1.0, 0.3],
     intensity: 1.0,
     space: "view"
});

new DirLight(viewer.current.scene, {
     id: "rimLight",
     dir: [0.2, -0.8, 0.8],
     color: [0.6, 0.6, 0.6],
     intensity: 1.0,
     space: "view"
}); */


    const xktLoader = new XKTLoaderPlugin(viewer.current)
    const model = xktLoader.load({
      id: "maz",
      src: "/models/ar/geometry.xkt",
      edges: true
    })

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
