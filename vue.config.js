// config at your vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module.rule('eslint').use('eslint-loader').options({
            fix: true
        });
    },

    pluginOptions: {
        i18n: {
            locale: 'en-GB',
            fallbackLocale: 'en-GB',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
};
