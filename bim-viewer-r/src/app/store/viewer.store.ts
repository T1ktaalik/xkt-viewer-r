import { create } from 'zustand'

type ActiveExplorerTab = 'models' | 'classes' | 'objects' | 'storeys'


export const useViewerStore = create((set) => ({
  activeExplorerTab: 'models',
  setActiveExplorerTab: (tab: ActiveExplorerTab) => set({activeExplorerTab: tab }),
}))
