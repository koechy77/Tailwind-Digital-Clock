// objects
// data structure collection of key value pairs

// literal
let objects = {key: 2, james: 3}
// console.log(objects)
// console.log(objects.key) dot notation
// console.log(objects["key"]) bracket notation

// object constructor
let property = new Object()

// methods of manipulating objects

// addition
property.name = "king"
property.age = 21
// console.log(property)

// checking if sth exists
// inItem...
// console.log("key4" in objects)
// console.log("james" in objects)

hasOwnProperty
// console.log(objects.hasOwnProperty("james")? "Yes, the key exists in the object" : "No, the key doesn't exist in the object")

// merging objects
let mergedObjects = {...objects, ...property}
// console.log(mergedObjects)

let objLength = Object.keys(mergedObjects).length
console.log(`length of the object is ${objLength}`)
console.log(typeof(mergedObjects))