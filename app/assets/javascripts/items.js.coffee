# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  $('#submitListing').click (e) ->
    e.preventDefault
    $('#confirmation').show()
    $('#formSubmission').hide()


App = angular.module("freeItems", [])

App.controller("ListController", ["$scope", "$http", ($scope, $http) ->
  $scope.itemCount = 0

  ])