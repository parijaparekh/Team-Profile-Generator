const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer"); 
    this.github_url = github; 
  }

  setExtraField(val){
    if (/(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_!#$%&'*+\/=?`{|}~^.-]+$/igm.test(val)){
      this.github_url = val;
      return true;
    }
    else{
      return false;
    }
  }

  extraFieldHTML(){
    return `Github: ${this.github_url}`;
  }

}

module.exports = Engineer;
  