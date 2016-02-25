"use_strict";
angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })


  .controller('ContactDetailCtrl', function ($scope, $stateParams, Contacts) {
    $scope.contact = Contacts.get($stateParams.contactId);
    console.log("dans le controleur de contact detail");
  })
  .controller('AccountCtrl', function ($scope, Contacts) {
    $scope.settings = {
      enableFriends: true
    };

  });
