
            //----- (01) - (Single Threded Execution Review)

// A reminder of how JavaScript executes code

const num = 3;
function multiplyBy2 (inputNumber) {
    const result = inputNumber*2;
    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);


            //----- (02) - (Asybchronicity in JavaScript)

// Slow function blocks further code running

const tweets = getTweets("http://twitter.com/will/l")

// 350ms wait while a request is sent to Twitter HQ

displayTweets(tweets)

// more code to run
console.log("I want to runnnn!")


            // (02)

// What if we try to delay a function directly using setTimeout?

function printHello() {
    console.log("Hello");
}

setTimeout(printHello,1000);
console.log("Me first!");

// in what order will our console logs appear?
            

            // (03)

// So what about a delay of oms            
// Now, in what order will our console logs occur?

function printHello() {
    console.log("Hello");
}

setTimeout(printHello,0);

console.log("Me first!");


            //----- (03) - (Callback Queue & Event Loop)
            

// We're interacting with a world outside of javascript now-so we need rules

function printHello() { console.log("Hello"); }
function blockFor1Sec(){ //blocks in the javascript thread for 1 sec }

    setTimeout(printHello,0);

    blockFor1Sec()
    console.log("Me first!");
