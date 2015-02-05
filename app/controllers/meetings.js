myApp.controller('MeetingsController', function($scope, $firebase) {



    var ref = new Firebase('https://amber-heat-4202.firebaseio.com/meetings');
    var meetings = $firebase(ref);

    $scope.meetings = meetings.$asObject();

    $scope.addMeeting=function() {
        meetings.$push({
            name: $scope.meetingname,
            date: Firebase.ServerValue.TIMESTAMP
        })


    } //addmeeting

}); //MeetingsController

