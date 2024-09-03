let user1 = "user1"

let user2= user1

console.log("user2 BEFORE val change is ->", user2)

user2="user2"

console.log("user2 AFTER val change is ->", user2)

console.log("*********")

let userObj1 = {
    name: 'a', age: 35, married: 'no'
}

let userObj2 = userObj1

console.log("user OBJ 1 BEFORE val change is ->", userObj1)
console.log("user OBJ 2 BEFORE val change is ->", userObj2)

userObj2.married = 'yes'

console.log("user OBJ 1 AFTER val change is ->", userObj1)
console.log("user OBJ 2 AFTER val change is ->", userObj2)

