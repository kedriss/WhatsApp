/**
 * Created by kedri on 22/02/2016.
 */
angular.module('starter.contactServices', [])

  .factory('Contacts', function() {
    // Might use a resource here that returns a JSON array
console.log("contacts service");
    // Some fake testing data
    var contacts   = [
     {
          "_id": "12345",
          "email": "gros@minet.com",
            "firstName": "Gros",
            "lastName": "minet",
            "face": 'images/max.png'
          },
      {
        "_id": "54321",
        "email": "titi@piaf.com",
        "firstName": "Titi",
        "lastName": "piaf",
        face: 'images/ben.png'
      },
      {
        "_id": "11122",
        "email": "Grany@vioc.com",
        "firstName": "grany",
        "lastName": "vioc",
        face: 'images/perry.png'
      }

    ];

    return {
      all: function() {
        return contacts;
      },
      remove: function(contact) {
        contacts.splice(contacts.indexOf(contact), 1);
      },
      get: function(contactId) {
        console.log('dans le get(i) de contactService');
        for (var i = 0; i < contacts.length; i++) {
          console.log(contacts[i]);
          if (contacts[i]._id === contactId) {
            return contacts[i];
          }
        }
        return null;
      }
    };
  });
