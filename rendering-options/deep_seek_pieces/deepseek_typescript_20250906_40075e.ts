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

interface PiecesState {
  pieces: string[];
  pushPiece: (newPiece: string) => void;
}

const useStore = create<PiecesState>((set) => ({
  pieces: [],
  pushPiece: (newPiece: string) => {
    set((state) => ({ 
      pieces: [...state.pieces, newPiece]
    }));
  },
}));

function App() {
  const theCanvas = useRef(null);
  const viewer: React.RefObject<any> = useRef(null);

  // CORRECT: Use selector functions
  const pieces = useStore((state) => state.pieces);
  const pushPiece = useStore((state) => state.pushPiece);

  // Debug effect - this will show updated pieces
  useEffect(() => {
    console.log('Pieces updated:', pieces);
  }, [pieces]);

  useEffect(() => {
    viewer.current = new Viewer({
      canvasElement: theCanvas.current
    });
    
    viewer.current.scene.clearLights();
    
    new AmbientLight(viewer.current.scene, {
      color: [0.999, 0.999, 0.999],
      intensity: 0.6
    });
    
    new Shadow(viewer.current.scene, {
      intensity: 0.99999999
    });
    
    new DirLight(viewer.current.scene, {
      id: "keyLight",
      dir: [0.8, -0.6, -0.8],
      color: [1.0, 1, 1],
      intensity: 1.0,
      space: "view"
    });
    
    const xktLoader = new XKTLoaderPlugin(viewer.current);
    const storeyViewsPlugin = new StoreyViewsPlugin(viewer.current);
    
    const model = xktLoader.load({
      id: "maz",
      src: "/models/ar/geometry.xkt",
      edges: true
    });

    model.on("loaded", () => {
      console.log("Model loaded!!!");
      
      const x = viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects;
      const names: string[] = [];
      
      // Collect all names first
      Object.values(x).forEach(a => {
        console.log("Found object:", a.name);
        names.push(a.name);
      });
      
      // Add all names to the store
      names.forEach(name => {
        pushPiece(name);
      });
      
      console.log("All pieces should be added now. Check the useEffect above for updates.");
    });

    new ImagePlane(viewer.current.scene, {
      src: "/333.png",
      size: 50,
      position: [0, -1, -50],
      rotation: [0, 0, 0],
      opacity: 1.0,
      collidable: false,
      gridVisible: true,
      pickable: true
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
            options={pieces.map(piece => ({ value: piece, label: piece }))}
          />
        </div>
        
        {/* Debug display */}
        <div className="absolute top-10 left-0 z-20 bg-white p-4">
          <h3>Pieces in store: {pieces.length}</h3>
          <ul>
            {pieces.map((piece, index) => (
              <li key={index}>{piece}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App