// const names = ["john", "doe", "mary", "bob", "dilon"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// for in loop
// looping through each key(firstName and lastName) and log in the value of each;
const user = {"firstName": "John", "lastName": "Doe"}
for (key in user) console.log(user[key]);