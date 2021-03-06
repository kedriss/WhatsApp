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

    var maxId = function(){
      var Id=0;
      for(var i=0; i < chats.length; i++){
        if (parseInt(chats[i]._id) > Id){
            Id = parseInt(chats[i]._id);
        }
      }

      return Id;
    }
    return {

      addChat:function(chat){
        //TODO faire des verif sur les données avant
        chat._id=maxId()+1;
        chats.push(chat);
        return chat._id;
      },
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(messageId) {

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
