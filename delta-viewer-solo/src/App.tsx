import {
  Viewer,
  XKTLoaderPlugin,
  BCFViewpointsPlugin
} from "@xeokit/xeokit-sdk";
import "./App.css";
import { useEffect, useRef } from "react";
import useBcfStore from "./stores/bcf-store"
import qs from 'qs'
import { useLocation } from 'react-router'
import { useSearchParams } from "react-router";
/* import { UrlParamsSchema } from "./schemas/urlParams"; */
import { Clipboard } from "flowbite-react"


function App() {
  const viewer = useRef(null)
  const theElement = useRef(null)
  const bcfViewpoints: any = useRef(null)

  const bcfViewpoint = useBcfStore(state => state.bcfViewpoint)
  const setBcfViewpoint = useBcfStore(state => state.setBcfViewpoint)
  const [searchParams, setSearchParams] = useSearchParams()

  let location = useLocation()
  console.log(location)
  function setSearch(bcfSearch: any) {
    setSearchParams(bcfSearch)
    
  }
  useEffect(() => {
    viewer.current = new Viewer({
      canvasElement: theElement.current,
    });
    const xktLoaderPlugin = new XKTLoaderPlugin(viewer.current)
    bcfViewpoints.current = new BCFViewpointsPlugin(viewer.current)
    let loaded = xktLoaderPlugin.load({
      id: "the-id",
      src: "geometry.xkt",
      edges: true,
    });
    loaded.on('loaded', () => {
      console.log('the model is loaded')
      if (searchParams.size) {
    
       try {
        let a = searchParams.get('bcf')
        if (a) {
          let b = qs.parse(a)
           bcfViewpoints.current.setViewpoint(b)
        }
       } catch(err) { console.log(err)}
          
        
        

      }
    })
  }, []);
  return (
    <>
      <button
        onClick={() => {
          if (bcfViewpoints.current) {
            let x = bcfViewpoints.current.getViewpoint({ snapshot: false })
            let y = qs.stringify(x)
            setSearch({ bcf: y })
            setBcfViewpoint(y)
          } else { console.log('что-то не рендерится как надо') }
        }}
        className="absolute top-0 left-1/3 z-20 border"
      >
        GET
      </button>
      <button
        onClick={() => {
          if (bcfViewpoints.current && bcfViewpoint) {
            bcfViewpoints.current.setViewpoint(qs.parse(bcfViewpoint))
          } else { console.log('нет метода set') }
        }}
        className="absolute top-0 right-1/3 z-20 border"
      >
        SET
      </button>
        <Clipboard valueToCopy={ `${window.location.origin}${location.pathname}${location.search}${location.hash}`} className="absolute top-1/10 right-1/2 z-20 border"  label="возьмите ссылку"/>
      <canvas
        id="the-canvas"
        className="absolute h-screen w-screen z-10"
        ref={theElement}
      ></canvas>
    </>
  );
}
export default App;
