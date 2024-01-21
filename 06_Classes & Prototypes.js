// page no. 66 on slide - link in first video

            //----- (01) - (Object Dot Notation)

// Objects - store functions with their associated data!
/* This is the principle of emcapsulation - and its going to transferm
how we can 'reason about' our code */          

const user1 = {
    name: "Will",
    score: 3,
    increment: function() { user1.score++; }
};

user1.increment();  // user1.score -> 4

// lets keep creating our objects. what altrenative techniques do we have for creating objects?



            //----- (02) - (Factory Functions)

// Creating user3 using Object.create            
// object.create is going to give us fine-grained control over our object later on

const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
    user3.score++;
};

// our code is getting repetitive, we are breaking our DRY principle. And suppose we have millions of users!
// What could we do?


                // (02)

// Solution1. Generate objects usings a function

function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };
    return newUser;
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment()


            //----- (03) - (Prototype Chain)

// Solution 2: Using the prototype chain

function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function() {this.score++;},
    login: function(){console.log("Logged in");}
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();


            //----- (04) - (hasOwnProperty Method)

// what if we want to confirm our user1 has the property score

function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function() {this.score++;},
    login: function() {console.log("Logged in");}
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.hasOwnProperty('score')

// we can use the has ownproperty method - but where is it?


            //----- (05) - (this keyword)

// create and invoke a new function (add1) inside increment

function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};            

const userFunctionStore = {
    increment: function() {
        function add1() { this.score++; }
        add1()
    }
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

// what does this get auto-assigned to?


            //----- (06) - (Arrow Function Scope & this)

// Arrow functions override the normal this rules

function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};            

const userFunctionStore = {
    increment: function() {
        const add1 = () => { this.score++; }
        add1()
    }
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

// now our inner function gets its this set by where it was saved - its a 'lexically scoped this



            //----- (07) - (new keyword)

// The new keyword automates a lot of our manual work

function userCreator(name, score) {
    const newUser = Object.create(functionStore) // line cancel
    /* newUser */ this.name = name;
    /* newUser */ this.score = score;
   /* return newUser; */
};

/*functionStore*/ userCreator.prototype // {};
/*functionStore*/ userCreator.prototype.increment = function() {
    this.score++;
}

const user1 = new userCreator("Will", 3);
              

                    // (02)

// interlude - functions are both objects and functions

function multiplyBy2(num) {
    return num*2
}

multiplyBy2.stored = 5
multiplyBy2(3)  // 6

multiplyBy2.stored  // 5
multiplyBy2.prototype   // {}

// we could use the fact that all functions have a default property 'prototype' on their object version, (itself an object) - to replace our 'functionStore' object


            //----- (08) - (new keyword example)

// the new keyword automates a lot of our manual work

function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function() { this.score++; };
userCreator.prototype.login = function() { console.log("login"); };

const user1 = new userCreator("Eva", 9)

user1.increment()


            //----- (09) - (class keyword)

// solution 4: the class 'syntatic sugar'

class userCreator {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
    increment () { this.score++; }
    login () { console.log("login"); }
}

const user1 = new userCreator("Eva", 9);
user1.increment();