function variableTypeOf(num) {
   // A1:
   // A2:
   // R:
   return typeof num;
}
let randomStuff = [
   "jello",
   "water",
   "color",
   "football",
   "basketball",
   "protein",
];
function elementIndexOf(userInput) {
   // A1: randomStuff is an array with strings inside
   // A2: a conditional statement that makes sure that randomStuff doesnt reach -1. its the default of indexOf. indexOf searches inside the array to make sure the string is in the array.
   // R: a boolean against what the user inputs
   if (randomStuff.indexOf(userInput) != -1) {
      return true;
   } else {
      return false;
   }
   return userInput;
}
let addNewArr = ["How", "old", "are", "you", "?", 28];
function addSpliceValue(input1, input2, addValue) {
   // A1:let addNewArr is an array with strings inside
   // A2:removedItems is equal to addNewArr to take out strings from addNewArr and replaces with what the user inputs
   // R: gives a result of what the user extracted and added together in one sentence. the join makes is readable by removing the commas.
   let removedItems = addNewArr.splice(input1, input2, addValue);
   return addNewArr.join(" ");
}
let oldArr = ["How", "are", "you", "doing", "today"];

function spliceTheWord(input1, input2) {
   // A1: let oldArr is an array with strings
   // A2: the function carries to arguements inside that will called in the return
   // A3: newArr is where splice is coming to remmove strings from the oldArr. the user will input the values of the position of the array
   let newArr = oldArr.splice(input1, input2).join(" ");
   return newArr;
}
function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   //A1: the function holds a min and max.
   //R: math.floor rounds the number down while math.random can't reach a number past 1,its in between 0 and 1.
}

var celebrity = [
   {
      name: "Johnny Depp",
      phone: "760-555-6666",
   },
   {
      name: "Dwyane Johnson",
      phone: "305-786-9543",
   },
   {
      name: "Tyra Banks",
      phone: "463-777-4444 ",
      likes: ["beaches", "beer", "glasses"],
   },
];
function contacts(name1, prop) {
   // A1: the code above is an array of objects
   // A2: variable num and text take on the value when the condition statement is reached
   // A3: a for loop grabbing the length of inside of the array
   // A4: condition statement if else to, test whether the user input matches from the array of objects
   //R: will return a phone number from a celebrity or will return text saying either no such property or no such celebrity exists
   var num = "";
   var text = "";
   for (var x = 0; x < celebrity.length; x++) {
      if (celebrity[x].name === name1) {
         if (celebrity[x].hasOwnProperty(prop)) {
            num = celebrity[x][prop];
         } else {
            text = "No such Property";
         }
      } else {
         text = "No such celebrity exists";
      }
   }
   return num || text;
}

function headsOrTails(input1) {
   // A1: variable counter will determine the tally between heads or tails
   // A2: the conditional statment to determine whether if the user picks heads or tails
   // R: will return either heads or tails and keep tally of which is winnning
   var counter = 0;
   if (input1 == "heads") {
      counter++;
   } else if (input1 == "tails") {
      counter--;
   }
   if (counter > 0) return counter + " Heads ";
   return counter + " Tails ";
}
