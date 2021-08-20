var loginApp = angular.module('loginApp',[]);
loginApp.controller('loginCtrl',function($scope){
    $scope.onSubmit = function(){
        console.log($scope.form);
    }
})

// var myArray = [
//     { 
//         "email" : "john@mail.com",
//         "password" : 1234
//     },
//     {
//         "email":"durail@mail.com",
//         "password" : 1234
//     }
// ]


// // function buildTableData(data){
// //     var table = document.getElementById("myTable")

// //     for(var i=0 ; i<data.length ; i++){

// //         var row =  `<tr>
// //                     <td>${data[i].email}</td>
// //                     <td>${data[i].password}</td>
// //                   </tr>`

// //                   table.innerHTML += row

// //                   console.log(">>"+i);
// //     }
// // }

// $(document).ready(function(){
//     $("#myForm").submit(function(event){
//         event.preventDefault();
//         var  email= $("#username").val();
//         var password = $("#password").val();
//         // var check = $("formcheckinput").val(); 
//         var newData = {"email" : email, "password" : password} ;
//         // myArray.push(newData);
//         // buildTableData(myArray);
//         console.log(newData);
//         // console.log(myArray);
//     })

// })



