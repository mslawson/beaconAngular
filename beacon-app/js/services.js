'use strict';

/* Services */
.factory('fireBaseData', function($firebase) {
    var ref = new Firebase("https://beaconcontracting.firebaseio.com/"),
        refJobs = new Firebase("https://beaconcontracting.firebaseio.com/jobs");

    return {
        ref: function() {
            return ref;
        },
        refJobs: function() {
            return refJobs;
        }
    }
});
