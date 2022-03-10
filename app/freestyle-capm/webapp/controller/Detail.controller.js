sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment"

], function (Controller, History, Fragment) {
	"use strict";
	return Controller.extend("freestyle.capm.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

			// oViewModel = new JSONModel({
			// 	editMode : false
			// });
			// this.setModel(oViewModel, "detailView");
			// this.oEditAction = this.byId("editAction");

		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path : "/Employees(ID=" + window.decodeURIComponent(oEvent.getParameter("arguments").employeePath)+ ")",
				parameters : {
					"$$updateGroupId" : 'employeeGroup'
				}	
			});
			console.log('in object', window.decodeURIComponent(oEvent.getParameter("arguments").employeePath));

		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		},
		onEditEmployee: function (oEvent) {
			// oViewModel = this.getModel("detailView"),
			// oViewModel.setProperty("/editMode", true),
			console.log('pressed onEditEmployee');
		},
		onResetChanges: function () {
			// oViewModel = this.getModel("detailView"),
			// oViewModel.setProperty("/editMode", false),
			this.getView().getModel().resetChanges('employeeGroup');

			console.log('pressed onCancelChanges');
		},
		
		// onDeleteEmployee: function () {
		// 	console.log('pressed delete employee');
		// },
		onSaveEmployee: function () {
			this.getView().getModel().submitBatch("employeeGroup");
			console.log('pressed Save');


			// oViewModel = this.getModel("detailView"),
			// oViewModel.setProperty("/editMode", false)
		},
		// onAddSkill: function () {
		// 	console.log('clicked add Skill');
		// }
	});
});