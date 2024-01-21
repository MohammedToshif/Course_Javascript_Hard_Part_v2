
            //----- (01) - (closure introduction)

//  Functions get a new memory every run/invocation 

function multiplyBy2 (inputNumber) {
    const result = inputNumber*2;
    return results;
}            

const output = multiplyBy2(7);
const newOutput = multiplyBy2(10);


            //----- (02) - (Returning Functions)

// Functions can be returned from other functions in javascript

function createFunction() {
    function multiplyBy2 (num) {
        return num*2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);    // 6


            //----- (03) - (Nested Function Scope)

// Calling a function in the same function call as it was defined

function outer () {
    let counter = 0;
    function incrementCounter () {
        counter ++;
    }
    incrementCounter();
}
outer();


            //----- (04) - (Retaining function memory)


// Calling a function outside of the function call in which it was defined

function outer () {
    let counter = 0;
    function incrementCounter () { counter ++; }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();


            //----- (05) - (Miltiple Closure Instances)


function outer () {
    let counter = 0;
    function incrementCounter () {
        counter ++;
    }
    return incrementCounter;
}            

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();