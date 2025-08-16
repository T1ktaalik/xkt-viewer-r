import {
  Viewer,
  XKTLoaderPlugin,
  BCFViewpointsPlugin
} from "@xeokit/xeokit-sdk";
import "./App.css";
import { useEffect, useRef } from "react";
import useBcfStore from "./bcf-store"
import qs from 'qs'
import { useLocation } from 'react-router'
import { useSearchParams } from "react-router";
function App() {
  const theElement = useRef(null);
  const { setSetterFunc, setGetterFunc, getBCF, setBCF } = useBcfStore()
  const [searchParams, setSearchParams] = useSearchParams()
  let location: any = useLocation()
  useEffect(() => {
    const viewer = new Viewer({
      canvasElement: theElement.current,
    });
    const xktLoaderPlugin = new XKTLoaderPlugin(viewer);
    const bcfViewpoints = new BCFViewpointsPlugin(viewer)
    xktLoaderPlugin.load({
      id: "the-id",
      src: "geometry.xkt",
      edges: true,
    });
    
    let theBcfView: any = undefined
    let theBcfParsed: any = undefined
    setGetterFunc(() => {
      theBcfView = bcfViewpoints.getViewpoint({snapshot: false})
      console.log(theBcfView)
      let theBcfViewParams = qs.stringify(theBcfView)
      setSearchParams(theBcfViewParams)
      console.log(typeof location.search)
      console.log(location.search)
      //theBcfParsed = qs.parse(theBcfViewParams)
      theBcfParsed = qs.parse(location.search.slice(1))
      console.log(theBcfParsed.perspective_camera)
      
    })
    setSetterFunc(() => { 
      console.log(theBcfParsed.perspective_camera)
      bcfViewpoints.setViewpoint(theBcfParsed), { immediate: false, duration: 5 } })
  }, []);
  return (
    <>
      <button
        onClick={setBCF}
        className="absolute top-0 left-1/3 z-20 border"
      >
        SET
      </button>
      <button
        onClick={getBCF}
        className="absolute top-0 right-1/3 z-20 border"
      >
        GET
      </button>
      <canvas
        id="the-canvas"
        className="absolute h-screen w-screen z-10"
        ref={theElement}
      ></canvas>
    </>
  );
}
export default App;
