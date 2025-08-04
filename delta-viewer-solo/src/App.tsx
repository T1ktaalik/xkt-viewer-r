import {
  Viewer,
  XKTLoaderPlugin,
  BCFViewpointsPlugin,
} from "@xeokit/xeokit-sdk";
import "./App.css";
import { useEffect, useRef } from "react";
import useViewStore from "./view-store";
interface View {
   look: [number, number, number],
    eye: [number, number, number],
    up: [number, number, number]
}
function App() {
  const theElement = useRef(null);
  let viewer: any = undefined;
  const { view, setView } = useViewStore();
  
function fixView(view: View) {
   setView(view);
  }

  useEffect(() => {
    viewer = new Viewer({
      canvasElement: theElement.current,
    });
    const xktLoaderPlugin = new XKTLoaderPlugin(viewer);
    
    const theScene = xktLoaderPlugin.load({
      id: "the-id",
      src: "geometry.xkt",
      edges: true,
    });
    theScene.on("loaded", () => {
      console.log(viewer.camera);
    });
  });
  useEffect(
    () => {
      fixView({ look: viewer.camera.look,
     eye: viewer.camera.eye,
     up: viewer.camera.up,});
    }
  );
  return (
    <>
      <button
        onClick={() => {
          console.log(viewer.camera.eye),
            console.log(viewer.camera.look),
            console.log(viewer.camera.up);
        }}
        className="absolute top-0 left-1/2 z-20"
      >
        ВИД!
      </button>
      <canvas
        id="the-canvas"
        className="absolute h-screen w-screen z-10"
        ref={theElement}
      ></canvas>
      <div className="absolute top-0 right-0 z-20 h-[300px] w-[300px] bg-red-100"></div>
    </>
  );
}

export default App;
