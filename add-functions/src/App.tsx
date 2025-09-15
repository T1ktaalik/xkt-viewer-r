import { useState, useRef, useEffect } from 'react'
import './App.css'
import { GLTFLoaderPlugin, Viewer, DirLight, AmbientLight, ReflectionMap, PointLight, Configs /* FastNavPlugin   */} from "@xeokit/xeokit-sdk"
function App() {
  const [count, setCount] = useState(0)
  const theViewerCanvas: any = useRef(undefined);
  const viewer: React.RefObject<any> = useRef(null);

  useEffect(()=> {
    
    viewer.current = new Viewer({
      canvasElement: theViewerCanvas.current,
      transparent: true,
        dtxEnabled: true,
        colorTextureEnabled: true
      
    })

       viewer.current.scene.gammaInput = true;
    viewer.current.scene.gammaOutput = true;
    viewer.current.scene.gammaFactor = 2.4;

    viewer.current.scene.sao.enabled = true; // Higher-quality SAO settings
    viewer.current.scene.sao.numSamples = 20;
    viewer.current.scene.sao.kernelRadius = 50;
    viewer.current.scene.sao.intensity = 0.1;

  /*    new FastNavPlugin(viewer.current, {
         hideEdges: true,
         hideSAO: true,
         hideColorTexture: false,
         hidePBR: false,
         hideTransparentObjects: false,
         scaleCanvasResolution: false,
         scaleCanvasResolutionFactor: 0.5,
         delayBeforeRestore: true,
         delayBeforeRestoreSeconds: 0.4
     });
 */

    viewer.current.scene.clearLights()
    new ReflectionMap(viewer.current.scene, {
      flipY: false,
    src: [
        "Uffizi_Gallery/Uffizi_Gallery_Radiance_PX.png",
        "Uffizi_Gallery/Uffizi_Gallery_Radiance_NX.png",
        "Uffizi_Gallery/Uffizi_Gallery_Radiance_PY.png",
        "Uffizi_Gallery/Uffizi_Gallery_Radiance_NY.png",
        "Uffizi_Gallery/Uffizi_Gallery_Radiance_PZ.png",
        "Uffizi_Gallery/Uffizi_Gallery_Radiance_NZ.png"
    ],
     
});
    new AmbientLight(viewer.current.scene, {
     color: [0.9999, 0.9999, 0.9999],
     intensity: 0.666
});

    new PointLight(viewer.current.scene,{
     id: "keyLight",
     pos: [-80, 60, 80],
     color: [1.0, 0.9999, 0.9999],
     intensity: 1.0,
     space: "view"
});

  /*   new DirLight(viewer.current.scene, {
     id: "keyLight",
     dir: [0.999, 0.9999, 0.89999],
     color: [1.0, 0.9999, 0.99999],
     intensity: 1.0,
     space: "view"
}); */

    const gltfLoader = new GLTFLoaderPlugin(viewer.current)
    const model = gltfLoader.load({
      id: 'the_house',
      src: "HousePlan.glb",
      edges: true,
      
    })

    model.on("loaded", () => {
      console.log('Загружено!')
       viewer.current.cameraFlight.flyTo(model);
    })
  })
  return (
    <>
        <div className=' h-full w-full'>
          <canvas ref={theViewerCanvas} className='h-full w-full'></canvas>
        </div>
    </>
  )
}

export default App
