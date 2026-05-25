// functions
// function declaration
// named function

function greet() {
    console.log(`Good day everyone`)
}
// greet()

// parameter
function greetUser(name) {
    console.log(`Hello\t${name}`)
}
// greetUser(`Kingsley`)

// function expression

let areaOfSquare = function (length, breadth) {
    return length * breadth
}
// console.log(areaOfSquare(3, 7))

let addition = function (num1, num2, num3) {
    return num1 + num2 + num3
}
// console.log(addition(10, 10, 1))

let square = function (num) {
    return num * num
}
// console.log(square(7))

// arrow function
let sum = (num1, num2) => num1 + num2
// console.log(sum(11, 10))
let sqr = num => num * num
// console.log(sqr(7))

// missing argument
let add = function (num1 = 0, num2 = 1, num3 = 2) {
    return num1 + num2 + num3
}
// console.log(add(18, 1))

// return keyword
function isAdult(age) {
    if (age < 18) {
        return `You are not an adult`
    } else {
        return `You are an adult`
    }
}
// console.log(isAdult(21))

// anonymous function
// setTimeout(function(){
// console.log(`This is printed after 7secs`)
// } , 7000)

// IIFE- Immediately Invoked Function Expression
(function () {
    console.log(`King is the man!`)
})()

// nested function
function firstNum(num1 = 0) {
    function addUp(num2 = 0) {
        return num1 + num2
    }
    return addUp
}
let answer = firstNum(20)
console.log(answer(1))

// construction Function
function greetUsers(name, state, school) {
    this.name = name
    this.state = state
    this.school = school
    this.greet = function () {
        return `Hello, my name is ${name}, I am from ${state}\n\t The name of my school is ${school}`
    }

}
let user1 = new greetUsers(`Kingsley`, `Imo`, `FUTO`)
// console.log(user1.name)
// console.log(user1.state)
// console.log(user1.school)
// console.log(user1.greet())

// async function 
async function sayHello(name) {
    return `Hello ${name}`
}
console.log(sayHello(`Kingsley`))
