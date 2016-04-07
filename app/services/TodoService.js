System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoService, TodoItem;
    return {
        setters:[],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                }
                TodoService.prototype.getItems = function () {
                    return [];
                };
                TodoService.prototype.authenticate = function () {
                    try {
                        this.validateHasUsername();
                        this.validateHasPassword();
                        this.validateCredentials();
                        return true;
                    }
                    catch (e) {
                        return false;
                    }
                };
                TodoService.prototype.validateHasUsername = function () {
                    if (this.username == "") {
                        throw new Error("No username");
                    }
                };
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
            TodoItem = (function () {
                function TodoItem(title, status) {
                    if (status === void 0) { status = ""; }
                    this.title = title;
                    this.status = status;
                    this.edit = false;
                }
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=TodoService.js.map