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