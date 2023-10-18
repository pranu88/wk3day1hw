// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// function maxOfTwoNumbers(num1,num2){
//     if(num1 > num2){
//         return num1;
//     }else if(num1 < num2){
//         return num2;
//     }else{
//         return num1;
//     }
// }

// console.log(maxOfTwoNumbers(-6,5));





// 2.Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// const maxOfThree = function (num1,num2,num3){
//     if(num1 >= num2 && num1 >= num3){
//         return num1;
//     }else if(num2 >= num1 && num2 >= num3){
//         return num2;
//     }else if(num3 >= num1 && num2 >= num3){
//         return num3;
//     }
// }

// console.log(maxOfThree(22,23,23))




// 3.Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

// function charAVowel(vowel){
//     if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U'){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(charAVowel('A'))


// 4.Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// let sumArray = function(numbers = []){
//     let sum = 0;
//      numbers.forEach(element => {
//       sum += element;  
//     });
// return sum;
// }
// console.log(sumArray([3,4,5]))


// 5.Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// function multiplyArray(values = []){

//     let product = 1;
//     for(let i = 0 ; i < values.length ; i++){
//         product *= values[i]
//     }
//     return product;
// }

// console.log(multiplyArray([2,4,10]))


// Using foreach method

// function multiplyArray(values = [ ]){

//     let product = 1; 
//     values.forEach(element => {
//         product *= element;
//     });
//     return product;
// }

//  console.log(multiplyArray([2,4,10]))


// 6.Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// let numArgs = function(){
//     return arguments.length;
// }
// console.log(numArgs([1,2,3],1,2,'ant',3,'cat'))


// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// function reverseString(string){
//     let newString = '';
//     for(let i = string.length-1; i >= 0; i--){
//         newString += string[i];
//     }    
// return newString;
// }
// console.log(reverseString('rockstar'))


