/**
 * Created by kedri on 25/02/2016.
 */
/**
 * Created by kedri on 22/02/2016.
 */
angular.module('starter.rightsServices', [])

  .factory('Rights', function () {
    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var rights = {
        "12345": {
          "12345": true,
          "54321": true,
          "11122": true

        }
      ,
      "54321": {
          "12345": false,
          "54321": true,
          "11122": true

        }
      }
    ;

    return {
      addRight:function(idChat,right){
        rights[idChat]=right;
      },
      all: function () {
        return rights;
      },
      remove: function (right) {
        rights.splice(rights.indexOf(right), 1);
      },
      get: function (rightId) {

        return rights[rightId];
      },

      isRight:function(idChat,idContact){
          return rights[idChat] && rights[idChat][idContact];
      }
    };
  });
