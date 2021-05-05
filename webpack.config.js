const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const dev = {

}

const prod = {

}


if(process.env.NODE_ENV === "production"){
    module.exports = {
        plugins:[new BundleAnalyzerPlugin()]
    }
}