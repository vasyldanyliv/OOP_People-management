function SuperUser() {
 this.isDataVisible = true;
}
SuperUser.prototype.changeDataVisibility = function () {
 this.isDataVisible = !this.isDataVisible;
 return this.isDataVisible;
};
