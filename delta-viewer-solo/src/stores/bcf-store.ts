import { create } from 'zustand'
interface BcfState {
    bcfViewpoint: any,
    setBcfViewpoint: any
}
const useBcfStore = create<BcfState>((set) => ({
bcfViewpoint: null,
setBcfViewpoint: (newBcfViewpoint: any) => set({bcfViewpoint: newBcfViewpoint})
}))

export default useBcfStore