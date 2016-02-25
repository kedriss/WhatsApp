/**
 * Created by kedri on 25/02/2016.
 */
"use_strict";
angular.module('starter.controllers')
  .controller('ChatsCtrl', function ($scope, Chats, Contacts, Rights, localStorageService) {
    $scope.contacts = Contacts.all();
    $scope.connected = localStorageService.get('CNX');


    //met a jour les informations sur les conversations
    var refreshChat = function () {
      $scope.newChat = {
        name: '',
        description: '',
        private: false
      };
      $scope.newRight=[];
      $scope.createChat = {show: false};
      var chats = Chats.all();
      var chatOk = [];
      for (var i = 0; i < chats.length; i++) {
        if (Rights.isRight(chats[i]._id, $scope.connected._id)||!chats[i].private) {
          chatOk.push(chats[i]);
        }
      }
      $scope.chats = chatOk;
    }

    $scope.remove = function (chat) {
      Chats.remove(chat);
    };

    $scope.createFormChat = function () {
      $scope.createChat.show = !$scope.createChat.show;
    }

    $scope.addChat = function () {
      if (checkNewChat()) {
        var chat = $scope.newChat;
        chat.creationDate = new Date().toISOString();
        var idChat = Chats.addChat(chat);

        if($scope.newChat.private) {
          var right = {};
          right[$scope.connected._id]=true; // forcement l'utilisateur connecté fait parti de la conversation qu'il crée
          for (var i = 0; i < $scope.newRight.length; i++) {
            right[$scope.newRight[i]] = true;
          }

          Rights.addRight(idChat, right);

        }
        refreshChat();
      }
    }


    var checkNewChat = function () {
      var newChat = $scope.newChat;

      return newChat.name && newChat.description && ($scope.newRight.length>0 || !$scope.newChat.private);
    }

    refreshChat();
  });
