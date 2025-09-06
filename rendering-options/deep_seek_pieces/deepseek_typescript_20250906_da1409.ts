// Add this function to your store for bulk adding:
addMultiplePieces: (newPieces: string[]) => {
  set((state) => ({
    pieces: [...state.pieces, ...newPieces]
  }));
},

// Then in your model loaded handler:
model.on("loaded", () => {
  console.log("Model loaded!!!");
  
  const x = viewer.current.scene.viewer.metaScene.metaModels["maz"].metaObjects;
  const names = Object.values(x).map(obj => obj.name);
  
  // Add ALL names at once - more efficient!
  useStore.getState().addMultiplePieces(names);
  
  console.log(`Added ${names.length} pieces to store`);
});