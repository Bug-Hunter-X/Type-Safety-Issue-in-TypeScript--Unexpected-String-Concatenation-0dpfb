function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Corrected usage with type checking
try {
  console.log(greeter(user[0])); //Correct Usage
} catch (error) {
  console.error("Error: " + error);
}

// Handling array input using a more robust approach
function greetUsers(users: string[]): string[] {
  return users.map(user => "Hello, " + user);
}

console.log(greetUsers(user)); //outputs ['Hello, Jane User', 'Hello, John User']