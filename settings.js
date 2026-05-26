module.exports = {
    flowFile: 'flows.json',
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,

    functionGlobalContext: {},

    exportGlobalContextKeys: false,

    editorTheme: {
        projects: {
            enabled: false
        }
    }
}
