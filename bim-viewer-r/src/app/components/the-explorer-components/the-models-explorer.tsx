'use client'
import { useViewerStore } from "@/app/store/viewer.store";
import { useEffect } from "react";
export default function TheModelsExplorer () {
   function setActivTabAsModels() {
      const viewerStore: any = useViewerStore();
      viewerStore.setActiveExplorerTab("models");
      console.log(' the models!')
    }

  useEffect(()=> {
   
  })
    
    return (
                 <div className="xeokit-tab xeokit-modelsTab">
            {/* <a className="xeokit-i18n xeokit-tab-btn" href="#" data-xeokit-i18n="modelsExplorer.title">Models</a> */}
            <button  onClick={setActivTabAsModels}>XOXOXO</button>
            <div className="xeokit-tab-content">
              <div className="xeokit-btn-group">
                <button type="button" className="xeokit-i18n xeokit-loadAllModels xeokit-btn disabled" data-xeokit-i18n="modelsExplorer.loadAll" data-xeokit-i18ntip="modelsExplorer.loadAllTip" data-tippy-content="Load all models">Load all</button>
                <button type="button" className="xeokit-i18n xeokit-unloadAllModels xeokit-btn disabled" data-xeokit-i18n="modelsExplorer.unloadAll" data-xeokit-i18ntip="modelsExplorer.unloadAllTip" data-tippy-content="Unload all models">Unload all</button>
                </div>
              <div className="xeokit-models" />
            </div>
          </div>
    );
}