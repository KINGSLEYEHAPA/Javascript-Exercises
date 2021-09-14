//1

let people =["Greg","Mary", "Devon", "James"];
for(i=0; i<people.length;i++) {

console.log(people[i]);

  }
  //2
  people.shift();
  //3
  people.pop();
  //4
  people.unshift("Matt");
  //5
  people.push("Kingsley");
  //6
  console.log(people);
for (i=0;i<2;i++){
  
  console.log(people[i]);
  
}
//7
console.log(people.slice(2,2));
//8
console.log(people.indexOf("Mary"));
//9
console.log(people.indexOf("Foo"));
//10
people= ["Greg","Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

//11
let withBob = people.concat("Bob");
console.log(people);


