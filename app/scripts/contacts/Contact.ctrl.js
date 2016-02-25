/**
 * Created by kedri on 23/02/2016.
 */

angular.module('starter.controllers')
.controller('ContactsCtrl', function ($scope, Contacts,localStorageService) {
  $scope.model = {truc: "yo"};
  $scope.contacts = Contacts.all();

})
