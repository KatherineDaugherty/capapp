sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'rapfioriapp.rapfioriapp',
            componentId: 'EmployeesList',
            entitySet: 'Employees'
        },
        AdditionalCustomListReportDefinition
    );
});