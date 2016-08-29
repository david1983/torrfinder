module.exports = {
    tor: {
        host: '127.0.0.1', port: 9050
    },
    app: {
        port: 3040,
        restartScript: require('path').dirname(require.main.filename) + '/server/scripts/restart_tor.sh'
    }
}