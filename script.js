//  QUESTION ONE;




document.addEventListener(
'DOMContentLoaded', function()
{
  let studentScore;

document.getElementById("btn").addEventListener("click", function () {
  let studentScore = parseInt(document.getElementById("checkScore").value);

  if (studentScore < 44) {
   alert(' F');
  } else if (studentScore >= 45 && studentScore < 49) {
    alert(" D");
  } else if (studentScore >= 50 && studentScore < 59){
    alert('C');
  } else if (studentScore >= 60 && studentScore < 69){
    alert('B');
  } else if (studentScore >=70  && studentScore == 100){
    alert('A');

  }
});
  })

 


 














// if (Score < 49) {

//   console.log("Failed");
// } else if (Score >= 50 && Score < 60) {
//   console.log("D");
// } else if (Score >= 60 && Score < 70) {
//   console.log("C");
// } else if (Score >= 70 && Score < 80) {
//   console.log("B");
// } else if (Score >= 80) {
//   console.log("A");
// }



























// // logical and comparison operators



// // symbol and BingIt

// const Kris1 = Symbol();
// const Kris2 = Symbol("lady");
// const Kris3 = Symbol("lady");

// console.log(Kris1.typeOf);

// console.log(Kris2.typeOf);
// console.log(Kris3.typeOf);

// // used to add uniqued properties
//   let A = 3141592653589793238462643383279;
//   let B = 1414213562373095 ;
//   let C = 2718281828459045235360287471352;
//   D = A + B * C;
//   console.log(D.ToString);

// // // if and else,else if
// let age = 18;

// if (age == 18){
//     console.log('Accepted')
// } else {
//     console.log('you need to be >18')
// }


// // else if

// let Score = 20;
// let HighestScore = 100;

// if (Score == 50){
//     console.log('C')
// } else if(Score > 50 &&  Score == 70 ){
//     console.log('B')
// } else if (Score < 50){console.log('Resit')}


// if (Score == HighestScore){
//     console.log('True')
// }else if (Score !== HighestScore){
//     console.log('you need a lot of study')
// }






// // STRINGS
// // Strings method
// let userName = 'Kristen';

// console.log(userName.charAt(0))
// console.log(userName.indexOf(0));
// console.log(userName.length);

// // to upperCase
// // to lowerCase
// // italics()
// // trimEnd
// const greeting = "   Hello world!   ";

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trimEnd());

// // trimEnd()


// // trimStart()


// // data Types
// let child = 18  
// if (child = 18){console.log('up to age')
// }
// let state = 'Plateau'
// let location = ''
// let time = null
// let isAllowd = Yes