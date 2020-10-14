

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //默认@：对应src
                assets: '@/assets',
                common: '@/common',
                components: '@/components',
                network: '@/network',
                views: '@/views'
            }
        }
    }
}