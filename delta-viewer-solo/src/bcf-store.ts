import { create } from 'zustand'
const useBcfStore = create((set) => ({
    getBCF: () => { console.log('the bcf func') },
    setBCF: () => { console.log('the bcf func') },
    setGetterFunc: (newBcfFunc: any) => {
        set({
            getBCF: newBcfFunc
        })
    },
    setSetterFunc: (newBcfFunc: any) => {
        set({
            setBCF: newBcfFunc
        })
    }
}))
export default useBcfStore