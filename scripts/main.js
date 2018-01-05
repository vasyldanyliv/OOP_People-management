
function validateEnterData(nameV, phoneV, emailV, birthDV, addressV) {
 var regExpForName = /^[a-zA-Z\-]+$/;
 var regExpForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 var regExpForPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
 // var regExpForBirthD =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

 if (nameV === "" || phoneV === "" || emailV === "" || birthDV === "" || addressV === "") {
  alert("Please fill in all empty sections");
  return false;
 }
 // name validation
 else if (!nameV.match(regExpForName)) {
  alert("Name can only contains the characters");
  return false;
 }
 // phone validation
 else if (!phoneV.match(regExpForPhone)) {
  alert("Please,enter a phone number in one of these formats: (123) 456 7899, (123).456.7899, " +
   "(123)-456-7899 123-456-7899, 123 456 7899, 1234567899 \n");
  return false;
 }
 // else if(!moment(birthDV.toString(), 'MM/DD/YYYY',true).isValid()) {
 //  alert("Invalid Date of birth");
 //  return false;
 // }

 // email validation
 else if (!emailV.match(regExpForEmail)) {
  alert("please provide your email following this instance : xxx@xxx.xx");
  return false;
 }
 return true;
}

// Create array for new added users
var userArray = [];

// clear form after saving user-data
function clearInputField() {
 var form = document.querySelector('.add-user');
 form.reset();
}

function addUserToTableList() {
 var name = document.querySelector("input[class='user-name']")
  .value;
 var sex = document.querySelector('.user-sex')
  .value;
 var birthD = document.querySelector("input[class='user-birth']")
  .value;
 var address = document.querySelector("input[class='user-address']")
  .value;
 var phone = document.querySelector("input[class='user-phone']")
  .value;
 var email = document.querySelector("input[class='user-email']")
  .value;

 if (validateEnterData(name, phone, email, birthD, address)) {

  // Added new instance
  var createInstanceOfUser = new User(name, sex, birthD, address, phone, email);
  userArray.push(createInstanceOfUser);
  // self = this;
  self.createNewRow(createInstanceOfUser);
  clearInputField();
 }
}
var buttonSave = document.querySelector("input[class='button']");
buttonSave.addEventListener('click', addUserToTableList);

// function showOrHideRow(event) {
var showOrHideRow = function (event) {
 //found clicked row =>
 var clickedRow = event.target.parentNode;
 // index of clicked row
 var index = event.target.parentNode.rowIndex;
 // change visibility depending of clicked row
 var rowVisibility = userArray[index - 1].changeDataVisibility();
 // first child - first cell is always visible;
 clickedRow.firstChild.classList.add('visible');
 // add or remove class hidden from clicked row
 if (rowVisibility) {
  clickedRow.classList.remove("hidden");
 } else {
  clickedRow.classList.add("hidden");
 }
};
