/**
 * Created by kedri on 24/02/2016.
 */
"use_strict";
angular.module('starter.controllers')
  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, Messages, Contacts, localStorageService) {

    var chargeMessages= function(){
      $scope.chat = Chats.get($stateParams.chatId);
      $scope.messages = Messages.get($stateParams.chatId);

      for(i=0; i<$scope.messages.length;i++){
        console.log($scope.messages[i]);
        console.log("mise a jour image message id= "+$scope.messages[i].senderID);
        console.log("mise a jour image message "+Contacts.get( $scope.messages[i].senderID).img);
        $scope.messages[i].face= Contacts.get( $scope.messages[i].senderID).face;

      }
    }


   chargeMessages();
    var throughInput =function(){
      $scope.input.message='';
    }

    $scope.sendMessage = function () {

      var contact = localStorageService.get('CNX');

      var newMessage = {
        "_id": $scope.chat._id,
        "senderID": contact._id,
        "message": $scope.input.message,
        "sentDate": new Date().toISOString()
      }

      Messages.add(newMessage);
      throughInput();
      //TODO utiliser une promesse
      $scope.messages = Messages.get($stateParams.chatId);
      chargeMessages();
    }
  });
