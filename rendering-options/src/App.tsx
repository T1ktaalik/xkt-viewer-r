import { useRef, useEffect } from "react";
import "./App.css";
import {
  Viewer,
  XKTLoaderPlugin,
} from "@xeokit/xeokit-sdk";
import { Select } from "antd"
import { create } from "zustand"
import theUri from "./assets/geometry";


const theVeryUri = `data:model/example;base64,${theUri}`
interface Piece {
  label: string;
  value: string;
}
interface PiecesState {
  pieces: { value: string; label: string }[];
  pushPiece: (newPiece: Piece) => void;
}

const useStore = create<PiecesState>(set => ({
  pieces: [],
  pushPiece: (newPiece: Piece) => {
    set(state => ({
      pieces: [...state.pieces, newPiece],
    }));
  },
}));

function App() {

  const theCanvas: any = useRef(undefined);
  const viewer: React.RefObject<any> = useRef(null);

  // CORRECT: Use selector functions
  const pieces = useStore(state => state.pieces);
  const pushPiece = useStore(state => state.pushPiece);

  useEffect(() => {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current,
    });
    const xktLoader = new XKTLoaderPlugin(viewer.current);

    const model = xktLoader.load({
      id: "maz",
      src: theVeryUri,
      edges: true,
    });

    model.on("loaded", () => {
      const x = viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects;
      const names: { label: string; value: string }[] = [];
      Object.values(x).forEach((a: any)=> {
        names.push({ label: a.name, value: a.id });
      });

      // Add all names to the store
      names.forEach(name => {
        pushPiece(name);
      });
    });

    model.on("loaded", () => {
      viewer.current.cameraFlight.flyTo(model);
    });
  }, [])

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <canvas className="h-full w-full" ref={theCanvas}></canvas>
        <div className="absolute top-0 z-20   left-1/2 transform -translate-x-1/2">
          <Select
            showSearch
            size="large"
            placeholder="поищите"
            options={pieces}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onSelect={(arg) => {
              if (viewer.current.scene.setObjectsSelected) {
                 viewer.current.scene.setObjectsHighlighted(viewer.current.scene.highlightedObjectIds, false)
                viewer.current.scene.setObjectsHighlighted([arg], true)
                viewer.current.cameraFlight.flyTo({
                            /* projection: "ortho", */
                            aabb: viewer.current.scene.getAABB(arg),
                            duration: 2})
              } else {
                console.log("probably we still can not");
              }
            }}
            style={{ width: "350px" }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
