import { create } from 'zustand'

type ActiveExplorerTab = 'models' | 'classes' | 'objects' | 'storeys'

interface ViewerStore {
  activeExplorerTab: ActiveExplorerTab
  setActiveExplorerTab: (tab: ActiveExplorerTab) => void
}
export const useViewerStore = create<ViewerStore>((set) => ({
  activeExplorerTab: 'models',
  setActiveExplorerTab: (tab: ActiveExplorerTab) => {
    set({activeExplorerTab: tab })
  },
}))
