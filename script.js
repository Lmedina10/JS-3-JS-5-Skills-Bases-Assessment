const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const message = document.getElementById('message');

class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }

  let button = document.querySelector('button');

  function buttonClick() {
    document.body.style.backgroundColor = "purple";
    let newUser = new User(firstName.value, lastName.value, age.value);
    console.log(newUser);
    console.log(`Hello ${newUser.firstName} ${newUser.lastName} ${newUser.age}`);
    message.innerHTML = `Hello  ${newUser.firstName} ${newUser.lastName} ${newUser.age}`
  }

  button.addEventListener('click', buttonClick);