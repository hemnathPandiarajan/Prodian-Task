var regFormApp = angular.module("regFormApp",[]);
regFormApp.controller("regFormController",function($scope){
    $scope.registerData = function(){
        console.log($scope.regData);
    }
})


// $(document).ready(function(){
//     $("#signupForm").submit(function(event){
//         event.preventDefault();
//         var firstName = $("#f_name").val();
//         var lastName = $("#l_name").val();
//         var mob_no = $("#mob_no").val();
//         var email = $("#email").val();
//         var password = $("#password").val();
//         var confirmPassword = $("#confirmPassword").val();
//         var gender =$("gender").val();
//         var submit = {
//             "firstName" : firstName,
//             "lastName" : lastName,
//             "mob_no" : mob_no,
//             "email" : email,
//             "password" : password,
//             "confirmPassword" : confirmPassword,
//             "gender" : gender
//         }
//         console.log(submit);
//     })
// })
