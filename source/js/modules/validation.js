// class CustomValidation {
//   constructor() {
//     this.invalidities = [];
//     this.validityChecks = [];
//   }
//   addInvalidity(message) {
//     this.invalidities.push(message);
//   }
//   getInvalidities() {
//     return this.invalidities.join('. \n');
//   }
//   checkValidity(input) {
//     for (let i = 0; i < this.validityChecks.length; i++) {

//       let isInvalid = this.validityChecks[i].isInvalid(input);
//       if (isInvalid) {
//         this.addInvalidity(this.validityChecks[i].invalidityMessage);
//       }
//     } // end for
//   }
//   checkValidity(input) {
//     let validity = input.validity;
//     if (validity.patternMismatch) {
//       this.addInvalidity('This is the wrong pattern for this field');
//     }
//   }
// }


// /* ----------------------------

// 	Validity Checks

// 	The arrays of validity checks for each input
// 	Comprised of three things
// 		1. isInvalid() - the function to determine if the input fulfills a particular requirement
// 		2. invalidityMessage - the error message to display if the field is invalid
// 		3. element - The element that states the requirement

// ---------------------------- */

// let usernameValidityChecks = [
//   {
//     isInvalid(input) {
//       return input.value.length < 2;
//     },
//     invalidityMessage: 'Заполните данное поле',
//   },
//   {
//     isInvalid(input) {
//       let illegalCharacters = input.value.match(/[^A-Za-zА-яа-яЕё]/g);
//       return illegalCharacters ? true : false;
//     },
//     invalidityMessage: 'Поле может содержать только буквы.',
//   }
// ];

// let phoneInputValidityChecks = [

//   {
//     isInvalid(input) {
//       return input.value.match(/[^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}]/g);
//     },
//     invalidityMessage: 'Поле может содержать только буквы.',
//   }
// ];


// // let passwordValidityChecks = [
// //   {
// //     isInvalid(input) {
// //       return input.value.length < 8 | input.value.length > 100;
// //     },
// //     invalidityMessage: 'This input needs to be between 8 and 100 characters',
// //     element: document.querySelector('label[for="password"] .input-requirements li:nth-child(1)'),
// //   },
// //   {
// //     isInvalid(input) {
// //       return !input.value.match(/[0-9]/g);
// //     },
// //     invalidityMessage: 'At least 1 number is required',
// //     element: document.querySelector('label[for="password"] .input-requirements li:nth-child(2)'),
// //   },
// //   {
// //     isInvalid(input) {
// //       return !input.value.match(/[a-z]/g);
// //     },
// //     invalidityMessage: 'At least 1 lowercase letter is required',
// //     element: document.querySelector('label[for="password"] .input-requirements li:nth-child(3)'),
// //   },
// //   {
// //     isInvalid(input) {
// //       return !input.value.match(/[A-Z]/g);
// //     },
// //     invalidityMessage: 'At least 1 uppercase letter is required',
// //     element: document.querySelector('label[for="password"] .input-requirements li:nth-child(4)'),
// //   },
// //   {
// //     isInvalid(input) {
// //       return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
// //     },
// //     invalidityMessage: 'You need one of the required special characters',
// //     element: document.querySelector('label[for="password"] .input-requirements li:nth-child(5)'),
// //   }
// // ];

// // let passwordRepeatValidityChecks = [
// //   {
// //     isInvalid() {
// //       return passwordRepeatInput.value !== passwordInput.value;
// //     },
// //     invalidityMessage: 'This password needs to match the first one',
// //   }
// // ];


// /* ----------------------------

// 	Check this input

// 	Function to check this particular input
// 	If input is invalid, use setCustomValidity() to pass a message to be displayed

// ---------------------------- */

// // function checkInput(input) {

// //   input.CustomValidation.invalidities = [];
// //   input.CustomValidation.checkValidity(input);

// //   if (input.CustomValidation.invalidities.length === 0 && input.value !== '') {
// //     input.setCustomValidity('');
// //   } else {
// //     let message = input.CustomValidation.getInvalidities();
// //     input.setCustomValidity(message);
// //   }
// // }


// /* ----------------------------

// 	Setup CustomValidation

// 	Setup the CustomValidation prototype for each input
// 	Also sets which array of validity checks to use for that input

// ---------------------------- */

// let usernameInput = document.getElementById('username');
// let phoneInput = document.getElementById('phone');
// // let passwordRepeatInput = document.getElementById('password_repeat');

// usernameInput.CustomValidation = new CustomValidation();
// usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

// phoneInput.CustomValidation = new CustomValidation();
// phoneInput.CustomValidation.validityChecks = phoneInputValidityChecks;


// // passwordRepeatInput.CustomValidation = new CustomValidation();
// // passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;


// /* ---------------------------

// 	Event Listeners

// ---------------------------- */

// // let inputs = document.querySelectorAll('input:not([type="submit"])');
// // let submit = document.querySelector('input[type="submit"');

// // for (let i = 0; i < inputs.length; i++) {
// //   inputs[i].addEventListener('keyup', function () {
// //     checkInput(this);
// //   });
// // }

// // submit.addEventListener('click', function () {
// //   for (let i = 0; i < inputs.length; i++) {
// //     checkInput(inputs[i]);
// //   }
// // });
