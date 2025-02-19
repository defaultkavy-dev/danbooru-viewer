export class LocalSettings {
    static get previewPanelEnabled() { return this.localdata?.previewPanelEnabled }
    static set previewPanelEnabled(boolean: boolean | undefined) { this.localdata = {...this.localdata, previewPanelEnabled: boolean }}
    
    static get detailPanelEnabled() { return this.localdata?.detailPanelEnabled }
    static set detailPanelEnabled(boolean: boolean | undefined) { this.localdata = {...this.localdata, detailPanelEnabled: boolean }}

    static get localdata() { const data = localStorage.getItem('local_settings_data'); return data ? JSON.parse(data) as LocalSettingsStoreData : null }
    static set localdata(data: LocalSettingsStoreData | null) { localStorage.setItem('local_settings_data', JSON.stringify(data)) }
}

export interface LocalSettingsStoreData {
    detailPanelEnabled?: boolean;
    previewPanelEnabled?: boolean;
}