// using angularjs


var empApp = angular.module('empApp',[]);
empApp.controller('empCtrl',function($scope){
    $scope.empArray = [ 
        {
            "name" : "john",
            "email" : "john@mail.com",
            "position" : "FEDeveloper",
            "mob_no" : 987543,
            "salary" : 15000
        },
        {
            "name" : "durai",
            "email" : "durai@mail.com",
            "position" : "FEDeveloper",
            "mob_no" : 97643,
            "salary" : 15000
        },
        {
            "name" : "bavani",
            "email" : "bavani@mail.com",
            "position" : "BEDeveloper",
            "mob_no" : 12345,
            "salary" : 15000
        },
        {
            "name" : "master",
            "email" : "master@mail.com",
            "position" : "Fullstackdeveloper",
            "mob_no" : 97663,
            "salary" : 25000
        }
    ]

    $scope.addEmp = function(){
        $scope.empArray.push($scope.empData);
        $scope.empData = "";
    }
})


// using j-query and javascript


// function empTableData(data){
//    var table = document.getElementById("empBody");

//    for(var i=0 ; i< data.length ; i++){

//     var row = `<tr>
//                 <td>${data[i].name}</td>
//                 <td>${data[i].email}</td>
//                 <td>${data[i].position}</td>
//                 <td>${data[i].mob_no}</td>
//                 <td>${data[i].salary}</td>
//              </tr>`

//             table.innerHTML+= row

//    }

// }

// function tableData(){
//     empTableData(empArray);
// }




// $("#empForm").submit(function(event){
//     event.preventDefault();
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var position = $("#position").val();
//     var mob_no = $("#mob_no").val();
//     var salary = $("#salary").val();
//     var result =  {
//         "name" : name,
//         "email" : email,
//         "position" : position,
//         "mob_no" :mob_no,
//         "salary" : salary
//     }
 
//     var tableContent = document.getElementById("empBody");

//     var newRow = `<tr>
//                 <td>${name}</td>
//                 <td>${email}</td>
//                 <td>${position}</td>
//                 <td>${mob_no}</td>
//                 <td>${salary}</td>
//              </tr>`

//             $(tableContent).append(newRow)

    
// })








