sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'rapfioriapp/rapfioriapp/test/integration/pages/MainListReport' ,
        'rapfioriapp/rapfioriapp/test/integration/pages/MainObjectPage',
        'rapfioriapp/rapfioriapp/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('rapfioriapp/rapfioriapp') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);