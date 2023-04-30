const forms = document.querySelector('.forms');
const links = document.querySelectorAll('.link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    forms.classList.toggle('show-login');
  });
});

const form = document.getElementById('form');
const loginForm = document.getElementById('login-form');
const firstName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.querySelector('.password');
const passwordTwo = document.querySelector('.confirmPass');
const errors = document.getElementById('errors');

form.addEventListener('submit', (event) => {
  const inputPass = checkInputs(firstName, lastName, email, password, errors);
  //check if account already exist in local storage
  const foundUser = findUser(email.value);
  if (inputPass == 1 && foundUser != 1){
    addUser();
    alert("Your account was created!");
    event.preventDefault();
  }
  else if (foundUser == 1){
    alert("Already a Subscriber")
  }
  else{
    event.preventDefault();
}
console.log(accounts);
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    function grantAccess (email, password){
        const accountsJSON = localStorage.getItem('accounts');
    if (!accountsJSON) {
        return -1;
    }
    
    const accounts = JSON.parse(accountsJSON);
    const user = accounts.find(account => account.userEmail === email && account.userPassword === password);
    
    if (user) {
      return 1;
    } else {
      return -1;
    }
    }
  // Find the account with the matching email and password in local storage.
    const foundUser = grantAccess(email.value, password.value);

    if (foundUser == 1) {
      // Login successful, do something
      alert('Login successful');
	  window.open("../demo.html", "_self");
    } else {
      // Login failed, show error message
      alert('Email or Password is invalid');
    }
});

//create an object that will contain the user's personal info & login access.
function addUser() {
    const user = {
      userEmail: email.value,
      userName: firstName.value,
      userLastName: lastName.value,
      userPassword: passwordTwo.value
    };
  
    const accountsJSON = localStorage.getItem('accounts');
    let accounts = [];
    console.log(accounts);
  
    if (accountsJSON) {
      accounts = JSON.parse(accountsJSON);
    }
  
    accounts.push(user);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }


function findUser(email) {
    const accountsJSON = localStorage.getItem('accounts');
    if (!accountsJSON) {
        return -1;
    }
    
    const accounts = JSON.parse(accountsJSON);
    const user = accounts.find(account => account.userEmail === email);
    
    if (user) {
      return 1;
    } else {
      return -1;
    }
  }


function checkInputs(firstName, lastName, email, password, errors) {
  let message = [];
  const passwordMatch = validatePassword(password, passwordTwo);
  if (firstName.value == '' || firstName.value == null) {
    message.push('Name is required');
  }
  if (lastName.value === '' || lastName.value == null) {
    message.push('Last Name is required');
  }
  if (email.value === '' || email.value == null) {
    message.push('Email is required');
  }
  if (message.length > 0 || password.value == '') {
    message.push('Password is required')
    errors.innerText = message.join(', ');
    errors.style.color = 'white';
    errors.style.border = '2px red solid';
    errors.style.borderRadius = '5px';
    errors.style.fontSize = 'larger';
    errors.style.padding = '5px';
    event.preventDefault();
  }
  if (message.length == 0 && passwordMatch == 1) {
    event.preventDefault();
    return 1;
  }
}
function validatePassword(password, passwordTwo) {
  if (password.value === passwordTwo.value) {
    return 1;
  } else {
    alert("Passwords don't match!!");
    return -1;
  }
}

