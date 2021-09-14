//Array Methods Exercises-Solution

//Part 1
let arr=[];
arr.push("Kingsley");
arr.push("Ehapa");
arr.unshift("Skyblue");
arr.shift();
let arr2= [];
arr2.push(1);
arr2.push("JavaScript");
arr2.indexOf("42");
console.log(arr2.indexOf("1"));// 0
console.log(arr2.indexOf("42"));// -1- the value not found as its not in the array
let combinedArr= arr.concat(arr2);
console.log(combinedArr);// ["Kingsley", "Ehapa", 1, "JavaScript"]


//Part 2

let arr = ["JavaScript", "Python", "Ruby", "Java"];
console.log(arr.slice(1,3));
let arr = ["JavaScript", "Python", "Ruby", "Java"];
console.log(arr.slice(1,3));
let concatenated=arr.concat("Haskell","Clojure");
console.log(concatenated);
console.log(arr.join( ", " ));

























