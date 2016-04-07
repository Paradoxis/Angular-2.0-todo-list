System.register(["angular2/platform/browser", "./components/Root"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, Root_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Root_1_1) {
                Root_1 = Root_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(Root_1.Root);
        }
    }
});
//# sourceMappingURL=app.js.map