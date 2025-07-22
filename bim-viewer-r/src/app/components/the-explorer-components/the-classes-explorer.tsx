    import { create } from 'zustand'
    


export default function TheClassesExplorer () {

    return (
        <div className="xeokit-i18n xeokit-tab xeokit-classesTab">
            <a className="xeokit-i18n xeokit-tab-btn disabled" href="#" data-xeokit-i18n="classesExplorer.title">Classes</a>
            <div className="xeokit-tab-content">
              <div className="xeokit-btn-group">
                <button type="button" className="xeokit-i18n xeokit-showAllClasses xeokit-btn disabled" data-xeokit-i18n="classesExplorer.showAll" data-xeokit-i18ntip="classesExplorer.hideAllTip" data-tippy-content="Show all classes">Show all</button>
                <button type="button" className="xeokit-i18n xeokit-hideAllClasses xeokit-btn disabled" data-xeokit-i18n="classesExplorer.hideAll" data-xeokit-i18ntip="classesExplorer.hideAllTip" data-tippy-content="Hide all classes">Hide all</button>
              </div>
              <div className="xeokit-classes xeokit-tree-panel" />
            </div>
          </div>
    );
}