// 1-Print only Number that it should be print only integer.
// " const str=["1","3",52, "Subhan"] "
const str = ["1", "3", 52, "Subhan"];
for (let i = 0; i < str.length; i++) {
  if (typeof str[i] == "number") {
    console.log(str[i]);
  }
}

// 2-Destructure an array.
let myInfo = ["Ahmad", 21, "Multan"];
let [myName, age, city] = myInfo;
console.log(myName, age, city);

// 3-Split an array into Pairs and if a pair is not full, it will contain the leftover items.
let arrSplit = [1, 2, 3, 4, 5, 6, 7];
let splitArr = [];
for (let i = 0; i < arrSplit.length; i += 2) {
  splitArr.push(arrSplit.slice(i, i + 2));
}
console.log(splitArr);

// 4-Array Methods with syntax and examples.
// Js Arrays Methods

let myArr = [1, 2, 3, 4, 5, 6, 7];
// tostring
console.log(myArr.toString());

// join method
console.log("Join ----> ", myArr.join(" - "));

// Pop method to remove from last index
myArr.pop();
console.log("pop ----> ", myArr);

// push method to add at last index
myArr.push(6);
console.log("push ----> ", myArr);

// shift method to remove from first index
myArr.shift();
console.log("shift ----> ", myArr);

// unshift method to add at first index
myArr.unshift(0);
console.log("unshift ----> ", myArr);

// sort method to sort the array in ascending or escending order
myArr.sort();
console.log("sort ----> ", myArr);

// At method to find the number at that index
let myVal = myArr.at(2);
console.log("At ----> ", myVal);

// Concat method to contact to arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let newArr = arr1.concat(arr2);
console.log("Concat ----> ", newArr);

// Reverse method to reverse an array
let arr3 = ["a", "b", "c", "d", "e"];
arr3.reverse();
console.log("Reverse ----> ", arr3);

// Filter method to filter elements from array
let arrFilter = myArr.filter(checkEven);
console.log("Filter ----> ", arrFilter);
function checkEven(val) {
  return val % 2 === 0;
}

// Splice method to delete element from specific index and then add elements to it
// Slice ----> modifies the main array
let arr5 = [1, 2, 3, 4, 5];
let newArr1 = arr5.splice(2, 3, 8, 9, 10);
console.log("Splice ----> ", arr5);
console.log("Spliced elements are ----> ", newArr1);

// Slice ----> returns a new array
let Arr = [1, 2, 3, 4, 5];
let newArr2 = Arr.slice(2, 4);
console.log("Slice ----> ", newArr2);

// Map method to map the array
let arrMap = Arr.map((val) => val * 2);
console.log("Map ----> ", arrMap);

// Every method to check if all the elements are true
let arrEvery = Arr.every((val) => val > 3);
console.log("Every ----> ", arrEvery);

// Some method to check if any of the elements are true
let arrSome = Arr.some((val) => val > 3);
console.log("Some ----> ", arrSome);

// Reduce method to reduce the array
let arrReduce = Arr.reduce((acc, val) => acc * val);
console.log("Reduce ----> ", arrReduce);

// ForEach method
let arrForEach = Arr.forEach((val) => {
  console.log(val);
});

// 5-program to check if the string is palindrome or not.
let str1 = "level";
let newString = "";
for (let i = str1.length - 1; i >= 0; i--) {
  newString += str1[i];
}
if (str1 == newString) {
  console.log("string is Palindrome");
} else {
  console.log("string is Not Palindrome");
}

// 6-Data Types.
// primitive and non primitive
// primitive data type : Number, String, Boolean, Null, Undefined
// non primitive data type : Object, Array, Function

// 7-Declaration and Reassignment of Variables.
//variables are declared using datatype and are reassigned them witout using datatype and just change their value.
let a; //declaration
a = 21; //reassignment

// 8-Find Minimum and Maximum number value in array.
let arr = [10, 20, 30, 40, 50];
let reduce = arr.reduce((max, cur) => {
  return max > cur ? max : cur;
});
console.log(`The maximum number is: ${reduce}`);
let min = arr.reduce((min, cur) => {
  return min < cur ? min : cur;
});
console.log(`The minimum number is: ${min}`);

// 9-Print a String in both cases (Lowercase and Uppercase).
let myStr = "Hello World";
let upper = myStr.toUpperCase();
let lower = myStr.toLowerCase();
console.log(upper, lower);

// 10-What keywords should we use for declaring variables in loops.
// let and var variable can be used as it is block scoped but try to avoid var because of it's global scope

// 11-scope of keywords used to declare variables. (Difference between Var,let const)
// var -->
// var has global scope
// can be reassigned and redeclared
// let -->
// let has block scope
// can't be redeclared but can be reassigned
// const -->
// const has block scope
// can't be reassigned & redeclared
