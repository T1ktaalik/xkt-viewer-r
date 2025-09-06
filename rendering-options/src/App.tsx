import { useState, useRef, useEffect } from "react";
import "./App.css";
import {
  Viewer,
  XKTLoaderPlugin,
  AmbientLight,
  DirLight,
  LightMap,
  ReflectionMap,
  PointLight,
  ImagePlane,
  StoreyViewsPlugin,
} from "@xeokit/xeokit-sdk";
import { Shadow } from "@xeokit/xeokit-sdk/src/viewer/scene/lights/Shadow.js";
import { Select } from "antd";
import { create } from "zustand";

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
  const theCanvas = useRef(null);
  const viewer: React.RefObject<any> = useRef(null);

  // CORRECT: Use selector functions
  const pieces = useStore(state => state.pieces);
  const pushPiece = useStore(state => state.pushPiece);

  useEffect(() => {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current,
    });

    viewer.current.scene.clearLights();

    new AmbientLight(viewer.current.scene, {
      color: [0.999, 0.999, 0.999],
      intensity: 0.999,
    });

    // viewer.current.scene.setObjectSelected({})

    const xktLoader = new XKTLoaderPlugin(viewer.current);
    const storeyViewsPlugin = new StoreyViewsPlugin(viewer.current);

    const model = xktLoader.load({
      id: "maz",
      src: "/models/ar/geometry.xkt",
      edges: true,
    });

    model.on("loaded", () => {
      console.log("Model loaded!!!");
      viewer.current.scene.setObjectsSelected([
        "1qF3ubcHz968P9vHIJ5clk",
        "1qF3ubcHz968P9vHIJ5clk",
        "2PReNj8db96h06nTwdVvrP",
        "2tagUSsGv3jfWthxK3IHRX"

      ]);

      const x =
        viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects;
      const names: { label: string; value: string }[] = [];
      console.log(x);
      // Collect all names first
      Object.values(x).forEach(a => {
        /*  console.log("Found object:", a.name, a.id); */
        names.push({ label: a.name, value: a.id });
      });

      // Add all names to the store
      names.forEach(name => {
        pushPiece(name);
      });

      console.log(
        "All pieces should be added now. Check the useEffect above for updates."
      );
    });

    model.on("loaded", () => {
      viewer.current.cameraFlight.flyTo(model);
    });
  }, []); // Empty dependency array - runs once on mount

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <canvas className="h-full w-full" ref={theCanvas}></canvas>
        <div className="absolute top-0 right-0 z-20">
          <Select
            showSearch={true}
            placeholder="поищите"
            /* options={pieces.map(piece => ({ value: piece.id, label: piece }))} */
            options={pieces}
            filterOption={(input, option) => 
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            /* onChange={(arg) => {
              if (viewer.current.scene.setObjectsSelected) {
                console.log('onChange')
                console.log(arg);
                console.log(typeof arg)
                viewer.current.scene.setObjectsSelected([arg]);
              }
            }} */
            onSelect={(arg) => {
              if (viewer.current.scene.setObjectsSelected) {
                console.log("onSelect")
            console.log(  viewer.current.scene.setObjectsSelected([arg], true))
                viewer.current.scene.setObjectsSelected([arg], true)

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
