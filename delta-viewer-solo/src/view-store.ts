import { create } from 'zustand'
 const useViewStore = create(()=> ({
    view: undefined,
    setView: ((newView: any)=> ({view: newView}))
  }) )
  export default useViewStore