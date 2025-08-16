import { create } from 'zustand'
const useViewStore = create((set)=> ({
    viewer: 22,
    setView: ((newView: any)=> set({view: newView}))
  }))
  useViewStore.subscribe(console.log)
  export default useViewStore