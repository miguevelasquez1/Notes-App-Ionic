import * as angular from 'angular';

var uId = 0;

angular.module('notesApp.controllers', [])

.controller('NotesAppCtrl', function($scope) {
  console.log(angular.version);

  $scope.newNote = {};
  $scope.notes = [];

  $scope.saveNote = function() {
      if($scope.newNote.id == null) {
          uId= uId + 1;
          $scope.newNote.id = uId;
          $scope.notes.push($scope.newNote);
      }
      else {
          for(var i in $scope.notes) {
              if($scope.notes[i].id == $scope.newNote.id) {
                  $scope.notes[i] = $scope.newNote;
              }
          }
      }

      $scope.newNote = {};

  }

  $scope.edit = function(id) {
      for(var i in $scope.notes) {
          if($scope.notes[i].id == id) {
              $scope.newNote = angular.copy($scope.notes[i]);
          }
      }
  }

  $scope.delete = function(id) {
      for(var i in $scope.notes) {
          if($scope.notes[i].id == id) {
              $scope.notes.splice(i, 1);
              $scope.newNote = {};
          }
      }
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
