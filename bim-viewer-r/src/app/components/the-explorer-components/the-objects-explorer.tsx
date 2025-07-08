export default function TheObjectsExplrer () {
    return (
         <div className="xeokit-tab xeokit-objectsTab">
            <a className="xeokit-i18n xeokit-tab-btn disabled" href="#" data-xeokit-i18n="objectsExplorer.title">Objects</a>
            <div className="xeokit-tab-content">
              <div className="xeokit-btn-group">
                <button type="button" className="xeokit-i18n xeokit-showAllObjects xeokit-btn disabled" data-xeokit-i18n="objectsExplorer.showAll" data-xeokit-i18ntip="objectsExplorer.showAllTip" data-tippy-content="Show all objects">Show all</button>
                <button type="button" className="xeokit-i18n xeokit-hideAllObjects xeokit-btn disabled" data-xeokit-i18n="objectsExplorer.hideAll" data-xeokit-i18ntip="objectsExplorer.hideAllTip" data-tippy-content="Hide all objects">Hide all</button>
              </div>
              <div className="xeokit-objects xeokit-tree-panel" />
            </div>
          </div>
    );
}
         