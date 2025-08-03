import { create } from 'zustand'
 const useViewStore = create((set)=> ({
    view: undefined,
    setView: ((newView: any)=> set({view: newView}))
  }) )
  export default useViewStore