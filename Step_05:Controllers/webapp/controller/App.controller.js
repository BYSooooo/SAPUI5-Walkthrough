sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello: function() {
            //show a native Javascript alert
            alert("Hello World!");
        }
    });
});