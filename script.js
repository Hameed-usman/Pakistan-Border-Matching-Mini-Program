// FOR LOOP IN JAVA 

// for(i = 5; i<= 11; i++){
//     console.log(i);
// }

// PRACTISE FOR LOOP 01 

// for(let i = 1; i <= 100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// PRACTISE FOR LOOP 02

// for(i = 1; i<=1000 ; i++){
//     if(i % 3 === 0){
//         console.log("Multiple Of 3");
//     } else if (i % 5 === 0){
//         console.log("Multiple Of 5");
//     } else {
//         console.log(i);
//     }
// }

// let sum = 0;

// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }

// console.log("The sum of all multiples of 3 or 5 below 1000 is:", sum);




// ====================="FOR LOOP PRACTISE"===============================

let arr = ["Iran", "India", "Afghanistan", "China"];
let city = prompt("Enter Country To Match Border With Pakistan");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === city) {
    alert(arr[i] +" Border Lies With Pakistan");
    break;
  }
  if (i === arr.length - 1) {
    alert("No Match");
  }
}

// PROBLEM TO CHEXK THE ELIGIBLITY OF CITY LAPTOP SCHEME

// let university = ["City","Cecos","Iqra","Agriculture","Peshawar","Sarhad"];
// const studentUniversity = prompt("Enter University To Check Criteria") .toLowerCase();
// let isEligible = false;

// for (let i = 0; i < university.length; i++){
//   if (studentUniversity === university[i] .toLowerCase()){
//     isEligible = true;
//     alert ("Eligible");
//     break;
//   }
// }

// if (!isEligible){
//   alert ("Not Eligible!")
// }


// NOW STRINGS 

// let name = `Usman
// Hameed
// The
// Best
// Student`


// CONCATENATION OF STRINGS

// let op1 = "Usman "
// let op2 = "Hameed "

// let ans = op1 + op2
// console.log(ans);

// CALCULATE LENGTH OF STRING

// let op1 = "Usman "
// let op2 = "Hameed "

// console.log(op1.length);
// console.log(op2.length);

// UPPER & LOWER CASE


// let op1 = "Usman"
// let op2 = "Hameed "
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());


//   ==============FUNCTIONS IN JAVA SCRIPT+++++++++++++++++++++++++++++++++

// function pakProvince (){
//     console.log("KPK","Punjab","Sindh","Balochistan")
// }

// pakProvince();

// PAAAARAMETERS PASSING IN FUNCTIONS

// function myName (string){
//     console.log("Your Name is :",string)
// }

// myName ("Usman Hameed");

// MULTIPLE PARAAMETER PASSING 

// function getRemainder (num1,num2){
//      let remainder = (num1 / num2)
//      console.log ("Remainder of Value is:",remainder)
//     }

//     getRemainder (6,12);





