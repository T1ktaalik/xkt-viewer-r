export default function TheStoreysExplorer () {
    return (
          <div className="xeokit-tab xeokit-storeysTab">
            <a className="xeokit-i18n xeokit-tab-btn disabled" href="#" data-xeokit-i18n="storeysExplorer.title">Storeys</a>
            <div className="xeokit-tab-content">
              <div className="xeokit-btn-group">
                <button type="button" className="xeokit-i18n xeokit-showAllStoreys xeokit-btn disabled" data-xeokit-i18n="storeysExplorer.showAll" data-xeokit-i18ntip="storeysExplorer.showAllTip" data-tippy-content="Show all storeys">Show all</button>
                <button type="button" className="xeokit-i18n xeokit-hideAllStoreys xeokit-btn disabled" data-xeokit-i18n="storeysExplorer.hideAll" data-xeokit-i18ntip="storeysExplorer.hideAllTip" data-tippy-content="Hide all storeys">Hide all</button>
              </div>
              <div className="xeokit-storeys xeokit-tree-panel" />
            </div>
          </div>
    )

}