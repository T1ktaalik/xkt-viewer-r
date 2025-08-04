import { create } from 'zustand'

interface View {
   look: [number, number, number],
    eye: [number, number, number],
    up: [number, number, number]
}

interface ViewerState {
  view: {
    look: [number, number, number],
    eye: [number, number, number],
    up: [number, number, number]
  }
  setView: (newView: View) => void
}
const useViewStore = create<ViewerState>((set)=> ({
    view: {
      look: [0, 0, 0],
      eye: [0, 0, 0],
      up: [0, 0, 0]
    },
    setView: ((newView: View)=> set({view: newView}))
  })  )
  export default useViewStore