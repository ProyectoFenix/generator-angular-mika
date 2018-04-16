(() => {
    'use strict';
    angular
    .module('<%= aplicationName %>', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();