        //----- (01) - (Generalize Function)

function squareNum(num) {
    return num*num;
}        

squareNum(10);   // 100
squareNum(9);   // 81
squareNum(8);   // 64


        //----- (02) - (Repeating Functionality)

function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }
    return output;
}        

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray)

// output = [2,4,6]


        //----- (03) - (Higher Order Functions)

function copyArrayAndDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }
    return output;
}        

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray)

// output = [0.5,1,1.5]      


        //----- (04) - (Higher Order Functions Example)

/* we could generalize our function - so we pass in our specific
 instruction only when we run copyArrayAndManipulate ! */

 function copyArrayAndManipulate(array, instruction) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instruction(array[i]));
    }
    return output;
 }

 function multiplyBy2(input) { return input * 2; }
 const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);



    //----- (05) - (Arrow Functions)

/* introducing arrow functions - a shorthand way to save functions */    

function multiplyBy2(input) { return input * 2; }

const multiplyBy2 = (input) => { return input*2 }

const multiplyBy2 = (input) => input*2

const multiplyBy2 = input => input*2

const output = multiplyBy2(3)   // 6


        // (02)


// we can even pass in multiplyBy2 directly withouth a name
// but its stilljust the code of a function being passes into copyArrayAndManipulate

function copyArrayAndManipulate(array, instruction) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instruction(array[i]));
    }
    return output;
}

const multiplyBy2 = input => input*2    // line cancel
const result = copyArrayAndManipulate([1, 2, 3], input => input*2);
