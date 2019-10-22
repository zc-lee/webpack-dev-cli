const webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server');

const devServer = require('./devServer');


module.exports = async (params) => {
    const config = await require('../config')(params)
    const server = new WebpackDevServer(webpack(config), devServer)
    // server.listen(devServer.port,devServer.host)
    server.listen(devServer.port,'0.0.0.0')
}