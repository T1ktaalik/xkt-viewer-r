'use client'
import TheModelsExplorer from '@/app/components/the-explorer-components/the-models-explorer'
import TheClassesExplorer from '@/app/components/the-explorer-components/the-classes-explorer'
import TheObjectsExplorer from '@/app/components/the-explorer-components/the-objects-explorer'
import TheStoreysExplorer from '@/app/components/the-explorer-components/the-storeys-explorer'
import { MouseEvent, useEffect } from 'react'
import { useViewerStore } from "@/app/store/viewer.store";
export default function TheExplorer() {
type ActiveExplorerTab = 'models' | 'classes' | 'objects' | 'storeys'
const { activeExplorerTab, setActiveExplorerTab } = useViewerStore();
  function preventDefault (e: MouseEvent) {
    e.preventDefault()
  }
  return (
    <>
     <button onClick={()=> {setActiveExplorerTab('models')}}>Модели</button>
  <button onClick={()=> {setActiveExplorerTab('classes')}}>Классы</button>
  <button onClick={()=> {setActiveExplorerTab('storeys')}}>Уровни</button>
  <button onClick={()=> {setActiveExplorerTab('objects')}}>Объекты</button>
    <div className="xeokit-tabs" onContextMenu={preventDefault}>
   <div className={activeExplorerTab === 'models' ? 'visible' : 'invisible'} ><TheModelsExplorer /></div>
   <div className={activeExplorerTab === 'classes' ? 'visible' : 'invisible'}><TheClassesExplorer /></div>
   <div className={activeExplorerTab === 'objects' ? 'visible' : 'invisible'}><TheObjectsExplorer /></div>
   <div className={activeExplorerTab === 'storeys' ? 'visible' : 'invisible'}> <TheStoreysExplorer />  </div>
        </div>
    </>
  );
}