let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// remove last item
const lastItem = secretMessage.pop();

// add two new items to array
const newItem = secretMessage.push("to", "Program");

// change item in array
secretMessage[7] = "right";
//console.log(secretMessage.indexOf('easily'))

// remove first item in array
secretMessage.shift();

//add new item to beginning of array
secretMessage.unshift("Programming");
//console.log(secretMessage)

//define an array of items to be deleted from array
let deleteItems = ["get", "right", "the", "time"];

// using filter methid to check the items and delete them from array and reassign it's new values
secretMessage = secretMessage.filter((item) => !deleteItems.includes(item));

// print out array
console.log(secretMessage.join(" "));
