/**
 * Created by kedri on 23/02/2016.
 */
"use_strict";
angular.module('starter.controllers')

  .controller('ConnexionCtrl', function ($scope, localStorageService, Contacts,$location) {
    console.log("danns le controler de connexion");

    $scope.loginForm = {
      mail: 'gros@minet.com',
      password: 'gros'
    };
    $scope.login = function () {

      console.log($scope.loginForm);
      if ($scope.checkInfoLogin()) {
        var contact = Contacts.getByMail($scope.loginForm.mail);
          if($scope.isLogOk(contact)){
            $scope.InfoConnexion = contact; // on stock le contact dans les infos de connection
            localStorageService.set('CNX',$scope.InfoConnexion);
            console.log(localStorageService.get('CNX'));
            $location.path('/chats');
          }
      }
    }

    /**
     * check les Si les champs sont reseignée
     * @returns {string}
     */
    $scope.checkInfoLogin = function () {

      return ($scope.loginForm.mail && $scope.loginForm.password);
    }

    $scope.isLogOk = function (contact) {

      return ($scope.loginForm.mail === contact.email && $scope.loginForm.password === contact.password);
    }

  });
