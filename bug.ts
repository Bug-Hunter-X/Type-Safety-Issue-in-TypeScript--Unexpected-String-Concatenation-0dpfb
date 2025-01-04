function greeter(person) {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //outputs Hello, Jane User,John User
console.log(greeter(user[0])); //outputs Hello, Jane User