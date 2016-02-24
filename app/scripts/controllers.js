"use_strict";
angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log("dans le chat controleur");
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
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
