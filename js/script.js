"use strict";

//1
// let user = localStorage.getItem("userData");
// if (user !== null) {
//   console.log(user);
// } else {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => {
//       localStorage.setItem("userData", JSON.stringify(data));

//     })
//     .catch((error) => console.error(error));
// }

//2
// function isValidDateFormat(str){
// var regExp=/^\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;

// return regExp.test(str)
// }

// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("5012/88/55 99:88")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false