sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
	"sap/m/MessageBox",
    "sap/ui/core/Fragment",
    "sap/ui/core/Core"

], function (Controller, MessageToast, MessageBox, Fragment, Core) {
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
        onDelete : function () {
            
			var oSelected = this.byId("idEmployeeTable").getSelectedItem();

			if (oSelected) {
				oSelected.getBindingContext().delete("$auto").then(function () {
					MessageToast.show(this._getText("deletionSuccessMessage"));
				}.bind(this), function (oError) {
					MessageBox.error(oError.message);
				});
			}
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