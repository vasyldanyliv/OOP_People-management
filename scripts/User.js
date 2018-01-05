var self;
function User(name, sex, birthD, address, phone, email) {
 SuperUser.call(this);
 self = this;
 this.name = name;
 this.sex = sex;
 this.birthD = birthD;
 this.address = address;
 this.phone = phone;
 this.email = email;
}
User.prototype = Object.create(SuperUser.prototype);
User.prototype.constructor = User;

User.prototype.createNewRow = function (createInstanceOfUser) {
 var tbody = document.getElementById('tbody');
 // create row with new added user
 var row = tbody.insertRow(-1);

 row.addEventListener('click', showOrHideRow);
 // added cells to newCreated row:
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 var cell4 = row.insertCell(3);
 var cell5 = row.insertCell(4);
 var cell6 = row.insertCell(5);
 cell1.innerText = createInstanceOfUser.name;
 cell2.innerText = createInstanceOfUser.sex;
 cell3.innerText = createInstanceOfUser.birthD;
 cell4.innerText = createInstanceOfUser.address;
 cell5.innerText = createInstanceOfUser.phone;
 cell6.innerText = createInstanceOfUser.email;
};