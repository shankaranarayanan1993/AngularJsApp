var myEmployee = angular.module('myEmployee' , []);

myEmployee.controller('myEmployeeController', function ($scope) {
    var vm = this;

    var employesDetails = [
        {name : 'Smith' , DOB : new Date ("JUly 24, 1989"), Gender : 'Male',Salary : '21312312.213123'},
        {name : 'Kohli' , DOB : new Date ("January 2, 1990") , Gender : 'Male' , Salary : '100000.454'},
        {name : 'Finch' , DOB : new Date ("February 1, 1989"), Gender : 'Male',Salary : '290000.545'},
        {name : 'Dhawan' , DOB : new Date ("March 3, 1991"), Gender : 'Male',Salary : '353535.1231'},
        {name : 'Starc' , DOB : new Date ("June 24, 1990"), Gender : 'Male',Salary : '2312312.545'},
        {name : 'Warner' , DOB : new Date ("April 24, 1987"), Gender : 'Male',Salary : '1232323'},
        {name : 'Ashwin' , DOB : new Date ("May 24, 1984"), Gender : 'Male',Salary : '918181.22221'},


    ];
    $scope.employesDetails = employesDetails;
    $scope.rowLimit = 3
    $scope.sortOrder = 3
});