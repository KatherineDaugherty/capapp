sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/Core"

], function (Controller, Fragment, Core) {
    "use strict";

    return Controller.extend("freestylecapm.controller.EmployeeList", {
        onInit: function () {
        },
        onAddEmployee: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            var employeeList = this.byId("idEmployeeTable")
            var employeeBinding = employeeList.getBinding("items")
            var oContext = employeeBinding.create({});
            oContext.created().then(function (oEvent) {
                oRouter.navTo("detail", {
                    employeePath: window.encodeURIComponent((oContext.getPath().substring(("/Employees(".length), oContext.getPath().length-1)))
                    // employeePath: oContext.getPath()
                });
            }, function (oError) {
            });

            console.log('employeeBinding', employeeBinding);
            console.log('oContext', oContext);
        },
        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            console.log('Click');
            oRouter.navTo("detail", {
                employeePath: window.encodeURIComponent((oItem.getBindingContext().getProperty("ID")))
            });
        }
    });
});