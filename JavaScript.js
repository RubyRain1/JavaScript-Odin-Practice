console.log("does this work?")

console.log("this is ever updated")

let message;

message = 'Hello WOrld this is let';

console.log(message) /* this is how to print out to the console on the inspect element. */

let age = 22, 
user = "Ruby";

console.log(age,user)

var int = 1;

console.log(int)

console.log(1+2+44+38) /77; 

let test='hello this is me'

console.log(test)

let slice= test.slice(1,5); /* this actually has to be the name of the string */

console.log(slice)

let sub= test.substring(3,6);

console.log(sub)

let test2= "this is just a new string so I can test"
let str= test2.substr(0,10);

console.log(str);

let rep = "this is to test school"
let rep1 = "This is to test school"
let newText= rep.replace("school", "replace") /* first word is the word wanting to replace, second is the word replacing. */

console.log(rep, newText)

let repAll= rep.replaceAll("this", 12+4);
console.log(repAll)

let lower= rep1.toLowerCase();
let upper= rep.toUpperCase();

console.log(lower);
console.log(upper);


let text1= "gaming"
let text2= "today"
let text3= text1.concat("", text2);

console.log(text1,text2,text3);

let tTable= "      word      "
let trim= tTable.trim();

console.log(trim)

let padS= text1.padStart(15, "h");
let padE= text1.padEnd(12, "h");
console.log(padS);
console.log(padE);

let char= text1.charAt(3);
let charC= text1.charCodeAt(3);

console.log(char, charC);

let split= "this, is, going, to, split, on, comma";

let splat= split.split(","); /* this makes a string into an array split by comma */

console.log(splat, split);

const string= "this is going to be a constant";

console.log(string);

const name = "Ruby"; /* we use const here cause my name will never cahnge */

const greeting = `hello, ${name}`; /* using back ticks (``) allows us to embed JS into a string */

console.log(greeting)

let one = "hello, ";
let two = "how are you?";

const joined = `${one}${two}`;

console.log(joined)


/* using alert() brings up an alert window I dont have it right now cause it constantly runs*/


let bruh = (0 == false);
let bleh = (0 === false); /* this is false based on type not actual value  */

console.log(bruh, bleh); /*  this shows the difference between normal and strict equality. */

/* this is going to be conditionals */

let hour = 12; 
let greeting1;
let fruits = "Banana";
/* if statement */
if (hour >= 10 ){
   greeting1 = "good morning";
   console.log(greeting1);
}

/* else statement */
if ( hour == 10){ 
    greeting1 = "good morning";
    console.log(greeting1);
} else {
    greeting1 = "good night"
    console.log(greeting1);
}

/* else if statement */

if (hour == 10){
    greeting1= "good morning"
    console.log(greeting1)
} else if(hour == 11){
    greeting1 = "good day"
    print(greeting1)
} else{
    greeting1 = "good night"
    console.log(greeting1)
}
/* this is a switch statement it goes off cases */
/* switch(fruits) { 
    case "Apple":
        alert("Hello")
        break;
    case "Banana":
        alert("Welcome")
        break;
} */


let array = ["tree",2,3,4,5,6];
array[5]= 7;

console.log(array);
console.log(array.length);
console.log(array[4]); /* this gets the value at index 4 (value of 5) */
console.log(array[5]);

const multiArray = [1,2,3,"tea",[9,8,7]];
multiArray[4][2]; /* the first bracket is the index that the multidimensional array starts. second is position in that array */

console.log(multiArray[4][2]);
console.log(multiArray.indexOf("tea")) /* will desplay -1 if not in array */

console.log(multiArray)
multiArray.push("bread","pog") /* this adds to the END of array */
console.log(multiArray)
multiArray.unshift("test");
console.log(multiArray);

const remArrayE = multiArray.pop(); /* pop removes end variable */

console.log(multiArray)
console.log(remArrayE)

const remArrayS = multiArray.shift(); /* this removes start variable */

console.log(multiArray);
console.log(remArrayS);

const index = multiArray.indexOf("tea")

if (index!== -1){
    multiArray.splice(index, 1); /* this allows us to remove based off index */
}

console.log(multiArray) 

for (const mArray of multiArray){ /* this for..of statement helps access all items */
    console.log(mArray) 
}

function double(number){
    return number * 2;
}
const numbers = [5,2,7,6];
const doubled = numbers.map(double); 
console.log(doubled)

function triple(number){
    return number * 3 /*  this function is being made to PASS to the map */
}

const numbers1 = [10,20,30,40]; /*  this is establishing the array */
const tripled = numbers1.map(triple); /* this takes the array and passes the function to each array item */
console.log(tripled) /* displays mapped variable */



function isLong(cities){
    return cities.length > 9;
}
const cities = ["Greensboro", "Charlotte", "Raleigh", "Winston-Salem"]
const cLength = cities.filter(isLong)
console.log(cLength)

/* Converting Between strings and arrays */

const splitA = "tree,wrong,right,left,bottom"
const splitS = splitA.split(",")

console.log(splitS)

console.log(splitS.length, splitS[0], splitS[1], 
    splitS[splitS.length - 1])

const commaSeparated = splitS.join("|");
console.log(commaSeparated)

const namesA = ["Rob","Holden","Ruby","jarret"]
const namesS = namesA.toString();
console.log(namesS)

if (cities.indexOf("Charlotte") == 1){
    console.log("it works")
} else{
    console.log("it no worky")
}

/* this will be the switch section */

/* use switch to check multiple cases for a strict equality. */

switch (cities.indexOf("Charlotte") == 2){

    case true :
        console.log("it games");
        break;
    
    case true && 1: 
        console.log("it does not game");
        break;
    default:
        console.log("this is just the default")
}

/* testing logic */

let a = 1;
let b = 1;

switch(++a){
    case b+1:
      console.log("the logic work");
      break;
    
    case b:
    case b-1: /* this is an example of grouping cases */
        console.log("yea I get it ");
        break;
}

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");   
console.log(madeAString);


const myNumber = Math.random() /* number from 0-1  */
console.log(myNumber)


function text(){

    document.getElementById("bReplace").innerHTML = (" does this work");
}