import TheModelsExplorer from '@/app/components/the-explorer-components/the-models-explorer'
import TheClassesExplorer from '@/app/components/the-explorer-components/the-classes-explorer'
import TheObjectsExplorer from '@/app/components/the-explorer-components/the-objects-explorer'
import TheStoreysExplorer from '@/app/components/the-explorer-components/the-storeys-explorer'
import { MouseEvent } from 'react'

export default function TheExplorer() {
  function preventDefault (e: MouseEvent) {
    e.preventDefault()
  }
  return (
 <div className="xeokit-tabs" onContextMenu={preventDefault}> 
    <TheModelsExplorer />
    <TheClassesExplorer />
    <TheObjectsExplorer />
    <TheStoreysExplorer />      
        </div>
  );
}