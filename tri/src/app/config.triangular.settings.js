(function() {
    'use strict';

    angular
        .module('app')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(triSettingsProvider, triRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        triSettingsProvider.setName('Proture');
        triSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' QPLOT.com');
        triSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        triSettingsProvider.setVersion('1.0.1');
        // set the document title that appears on the browser tab
        triRouteProvider.setTitle('Proture');
        triRouteProvider.setSeparator('|');
    }
})();
