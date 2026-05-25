// Methods used to manipulate strings
let name = "Mark"

let statement = "Hello I am from 'Lagos'";
// statement = 'Hello I am from "Lagos"';
// statement = `Hello I am from "Lagos"`;

// Length
let statementLength = statement.length;
console.log(statement.length)

// Index
let firstStatementChar = statement[22];
// console.log(firstStatementChar);
// console.log(statement[4]);

let firstCharacter = statement.indexOf('o');
let lastCharacter = statement.lastIndexOf('o');
console.log(firstCharacter)
console.log(lastCharacter)

// slice
let slicedStatement = statement.slice(0, 12)
console.log(slicedStatement)
// subString
let subString = statement.substring(0, 12)
console.log(subString)

// toUppercase
console.log(statement.toUpperCase())

// toLowercase
console.log(statement.toLowerCase())

// split
let splitStatement = statement.split(" ")
console.log(splitStatement)

let joinedStatement = statement.split(" ").join(" ")
console.log(joinedStatement)

// concat
let sentence = statement.concat(", says Koech")
console.log(sentence)

// startsWith
let startWord = statement.startsWith("Hello")
console.log(startWord)
// endsWith
let endWord = statement.endsWith("'Lagos'")
console.log(endWord)

// includes
let includeWord = statement.includes("am")
console.log(includeWord)

// charAt
let statementChar = statement.charAt(4)
console.log(statementChar)

// replace & replaceAll
let newStatement = statement.replace("'Lagos'", "'Rivers'")
console.log(newStatement)

let newSoatement = statement.replaceAll("o", "This is the word of the day- Lorem Ipsum")
console.log(newSoatement)

// trim
let trimStatement = statement.trim()
console.log(trimStatement)
// trimStart
let trimStartStatement = statement.trimStart()
console.log(trimStartStatement)
// trimEnd
let trimEndStatement = statement.trimEnd()
console.log(trimEndStatement)

// padStart
let paddedStatementStart = statement.padStart("#", 30)
console.log(paddedStatementStart)
// padEnd
let paddedStatementEnd = statement.padEnd(30, "#")
console.log(paddedStatementEnd)

// match
let matchStatement = statement.match("am")
console.log(matchStatement)