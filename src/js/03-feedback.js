var _ = require('lodash');

const inputValue = {};
// inputValue.email = 'jakiś@email.com';
// inputValue.message = 'jakiś tekst';
// console.log(inputValue);
// const inputValueToJSON = JSON.stringify(inputValue);
// console.log(inputValueToJSON);
//
// localStorage.setItem('feedback-form-state', inputValueToJSON);
//
// const inputValueFromJSON = JSON.parse(inputValueToJSON);
// console.log(inputValueFromJSON);
// 
// localStorage.clear();
// 
if (localStorage.getItem('feedback-form-state') != null) {
  const currentValue = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  console.log(currentValue);
}

const emailInput = document.querySelector("input[name='email']");
emailInput.addEventListener('input', event => {
  inputValue.email = event.currentTarget.value;
    const inputValueToJSON = JSON.stringify(inputValue);
    localStorage.setItem('feedback-form-state', inputValueToJSON);
});

const messageInput = document.querySelector("textarea[name='message']");
messageInput.addEventListener('input', event => {
  inputValue.message = event.currentTarget.value;
    const inputValueToJSON = JSON.stringify(inputValue);
    localStorage.setItem('feedback-form-state', inputValueToJSON);
});
//
//
// 
// const form = document.querySelector('.form');
// 
// form.addEventListener('submit', handleSubmit);
// 
// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;
// 
//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }
// 
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
//
// 
//
// Po wysłaniu formularza wyczyść storage i pola formularza,
// a także wyloguj obiekt z polami 'email', 'message' i ich
// aktualnymi wartościami do konsoli.
//
console.log();
//
