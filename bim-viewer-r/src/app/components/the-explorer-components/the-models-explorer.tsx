'use client'

import { useEffect } from "react";
export default function TheModelsExplorer () {
   

 
    return (
                 <div className="xeokit-tab xeokit-modelsTab">
            {/* <a className="xeokit-i18n xeokit-tab-btn" href="#" data-xeokit-i18n="modelsExplorer.title">Models</a> */}
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