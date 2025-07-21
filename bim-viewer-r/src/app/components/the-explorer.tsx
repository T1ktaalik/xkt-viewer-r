import TheModelsExplorer from '@/app/components/the-explorer-components/the-models-explorer'
import TheClassesExplorer from '@/app/components/the-explorer-components/the-classes-explorer'
import TheObjectsExplorer from '@/app/components/the-explorer-components/the-objects-explorer'
import TheStoreysExplorer from '@/app/components/the-explorer-components/the-storeys-explorer'

export default function TheExplorer() {
  return (
 <div className="xeokit-tabs"> 
    <TheModelsExplorer />
    <TheClassesExplorer />
    <TheObjectsExplorer />
    <TheStoreysExplorer />      
        </div>
  );
}