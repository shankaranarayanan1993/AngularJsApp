var technologiesApp = angular.module("technologiesAppModule",[]);

technologiesApp.controller('technologiesAppController', function ($scope) {

    var vm = this;
    vm.technologies = [
        { name: 'c#', likes: 0, dislikes : 0 },
        { name: 'Sql#', likes: 0, dislikes : 0 },
        { name: 'Angular', likes: 0, dislikes : 0 }
    ];
    vm.incrementLikes = function(tech){
        tech.likes ++
    };
    vm.decrementLikes = function(tech){
        tech.dislikes ++
    };

    $scope.technologies = vm.technologies;
    $scope.incrementLikes = vm.incrementLikes;
    $scope.decrementLikes = vm.decrementLikes;


});