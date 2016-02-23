/**
 * Created by kedri on 22/02/2016.
 */
angular.module('starter.messagesServices', [])

  .factory('Messages', function() {
    // Might use a resource here that returns a JSON array
console.log("chats service");
    // Some fake testing data
    var messages  = [

      {
        "_id": "12345",
        "senderID": "12345",
        "message": "Salut titi ca roule sec?",
        "sentDate": "2016-02-12T08:10:56.054Z"
      },

      {
        "_id": "12345",
        "senderID": "54321",
        "message": "Ouesh!",
        "sentDate": "2016-02-12T08:11:56.054Z"
      }
    ];

    return {
      all: function() {
        console.log("dans le all de messages");
        return messages;
      },
      remove: function(message) {
        messages.splice(messages.indexOf(message), 1);
      },
      get: function(messageId) {
        var retour=[];
        console.log('dans le get(i) de message  Service');
        for (var i = 0; i < messages.length; i++) {
          console.log(messages[i]);
          if (messages[i]._id === messageId) {
            retour.push(messages[i]);
          }
        }
        return retour;
      }
    };
  });
