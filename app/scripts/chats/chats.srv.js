/**
 * Created by kedri on 22/02/2016.
 */
angular.module('starter.chatsServices', [])

  .factory('Chats', function() {
    // Might use a resource here that returns a JSON array
console.log("chats service");
    // Some fake testing data
    var chats   = [

      {
        "_id": "12345",
        "name": "Conversation 1",
        "description": "Description de la conversation",
        "creationDate": "2016-02-12T08:10:56.054Z",
        "private": true,
        "lastMessageDate": "2016-02-12T08:10:56.054Z",
        "lastMessage": "Dernier message a rechercher dynamiquement"
      }
      ,
      {
        "_id": "54321",
        "name": "Conversation 2",
        "description": "Description ",
        "creationDate": "2016-02-13T08:10:56.054Z",
        "private": true,
        "lastMessageDate": "2016-02-13T08:10:56.054Z",
        "lastMessage": "Dernier message a rechercher dynamiquement"
      }


    ];

    return {
      all: function() {
        console.log("dans le all de contact");
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(messageId) {
        console.log('dans le get(i) de chatService');
        for (var i = 0; i < chats.length; i++) {
          console.log(chats[i]);
          if (chats[i]._id === messageId) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
