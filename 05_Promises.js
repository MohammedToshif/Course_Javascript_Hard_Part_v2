
            //----- (01) - (Promises Introduction)

// ES6+ Promises

function display(data) {
    console.log(data)
}

const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display);

console.log("Me first!");


            //----- (02) - (Web APIs & Promises Example: fetch)


/* But we need to know how our promise-deferred functionality gets back
  into Javascript to be run */
  
function display(data) {console.log(data)}
function printHello() {console.log("Hello");}
function blockFor300ms() { // blocks js thread for 300ms }

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)

blockFor300ms()
console.log("Me first!");