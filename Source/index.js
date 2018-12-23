var myApp = angular.module('myModule', []);

myApp.controller('myController', function($scope){
    var vm = $scope;

    vm.countries = [
    {
        name : 'UK',
        city : [
            { name :"London"},
            { name : 'Brimingham'},
            { name: 'nottingham'},
        ]
    },
    {
        name : 'USA',
        city : [
            { name :"Los Angeles"},
            { name : 'Chigago'},
            { name: 'Houston'},

        ],
    },
    {
        name : 'India',
        city : [
            {name :"Hyderabad"},
            { name : 'Chennai'},
            { name: 'Mumbai'},

        ]
    },
]
});

