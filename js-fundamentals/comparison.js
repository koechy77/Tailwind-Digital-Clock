let result = 67
console.log(result > 68)
console.log(45 <= result)

// equality doesn't care about data type, as long as it's same value
console.log(45 == 45)
console.log('45' == 45)

// strict equality checks data type
console.log('45' === 45)

// logical operator
// And operator
console.log(45 >= 25 && 45 == 45)
// Or operator
console.log(45 >= 25 || 45 > 50)

// inversion / Not operator
console.log('45' == 45)
console.log('45' != 45)
console.log('45' !== 45)

// Truthy or Falsy
console.log(result)
console.log(!!result)

// is not a number
console.log(isNaN(3))
console.log(isNaN("real"))
console.log(isNaN(result))

// Ternary operations
console.log(isNaN("text") ? "Yes, it is not a number" : "No, it is a number")

// string command
console.log(30)
console.log((30).toString())

console.log(parseInt("1111"))
console.log(parseInt("1111", 2))

// lil test
const PI = 3.142
let r = 10
console.log(Math.PI*r**2)