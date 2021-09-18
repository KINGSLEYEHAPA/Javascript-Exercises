//Part 1

//Print day
function printDay(a) {
    let dayName = ["start", "Sunday",
      "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
    ];
    if (a > 7 || a < 1) {
      console.log("undefined");
    
    } else {
    
      console.log(dayName[a]);
    }
    
    }
    printDay(7);
    
    
    //Difference Function
    
    function difference(a, b) {
    let result = a - b;
    return result;
    
    }
    console.log(difference(8, 7));
    
    //Product function
    
    function product(a, b) {
    let result = a * b;
    return result;
    
    }
    console.log(product(4, 600));
    
    //Last Element Function
    
    function lastElement(arry) {
    if (arry.length === 0) {
      return "undefined";
    
    } else {
    
      return arry[arry.length - 1];
    
    }
    
    }
    let king = ["Edward", "Erediawa",
    "Atuwatse 111", "Ewuare", "Onikan", "The Ohinoyin"];
    let date = ["Dec 25", "Oct 1", "May 1",
    "Jan 1"
    ];
    
    let emptyArray = [];
    console.log(lastElement(king));
    
    
    //Numbercompare function.
    
    function numberCompare(a, b) {
    if (a > b) {
    
      console.log(" First is greater.");
    } else if (a < b) {
    
      console.log("Second is greater.");
    
    } else {
      console.log("Numbers are equal.");
    }
    
    }
    numberCompare(75, 200);
    
    
    
    
    
    //SingleLetterCount function
    function singleLetterCount(a, b) {
    let uppercaseString1 = a.toUpperCase();
    let uppercaseString2 = b.toUpperCase();
    let stringCount = 0;
    for (let i = 0; i < uppercaseString1
      .length; i++) {
      if (uppercaseString1.charAt(i) ===
       uppercaseString2) {
    
       stringCount++;
      }
    
    }
    
    return stringCount;
    
    }
    console.log(singleLetterCount(
    "smmmmmall",
    "m"));
    
    // Multiple Letter Count 
    
    function multipleLetterCount(a) {
    
    let objectCount = {};
    
    for (let i = 0; i < a
      .length; i++) {
      if (!(a.[i] in
       objectCount)){
        objectCount[a[i]]=1;
    
     
      }
      else
        {
          objectCount[a[i]]++;
          
          
        }
    }
    
    
     return objectCount;
    
    }
    console.log(multipleLetterCount("Munchies"));
    
    
    //ArrayManipulation
    
    function arrayManipulation(array,command, location, value){
      
      if (command==="remove" && location=== "end"){
        
       let deleteN= array.pop();
        return deleteN;
        
        
        
      }
      else if(command==="remove"&& location=== "beginning") {
        
        let deleteN =array.shift();
        return deleteN;
        
         }
      else if(command==="add"&&location==="end"  ){
        
        array.push(value);
        return array;
        
      }
      
      else if(command==="add"&&location==="beginning"   ){
        
         array.unshift(value);
        return array;
        
        
      }
      
    }
    let me=[1,2,2,2,5,5,7,85,7,58];
    
    console.log(arrayManipulation(me,"add", "beginning",255));
    
    //isPalindrone


    function isPalindrone(str) {
      let newArray = [];
        str=str.toLowerCase();
      for (let i = 0; i < str.length; i++) {
      
        newArray.push(str[i]);
      
      }
      let reverseArray = [];
      for (let i = newArray.length - 1; i >=
        0; i--) {
      
        reverseArray.push(newArray[i]);
      
      }
        for (let i=0; i< newArray.length;i++){
          
          if(newArray[i] !==reverseArray[i]){
            
            return false;
            
            
            
          }
          else {
            return true;
          }
        }
      
      
      
      
      }
      
      console.log(isPalindrone("tacocat")); 
      
      //Part 3
      
      //Rock Paper and Scissors game
      
      let userEntry = prompt("What is your Choice?");
      
      function randomWinnerComputer(userEntry){
       userEntry = userEntry.toLowerCase();
        let generatedAnswer;
        
        if (Math.random()<=0.33){
          
         generatedAnswer= "rock";
          
        }
        else if ( Math.random()>0.33&&Math.random()<=0.66){
          
            generatedAnswer= "paper";
        
        }
       else    {
             generatedAnswer= "scissors";
            
          }
          
          
          if (userEntry===generatedAnswer){
            
            alert( "You win!!!");
            
          }
          else{
             alert( "You lose!!!");
            
          }
        
      }
      randomWinnerComputer(userEntry);
      
  