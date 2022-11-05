const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school_name) {
    super(name, id, email, "Intern");  
    this.school_name = school_name;
  };

  //for school name
  setExtraField(val){
    if (/^[a-z0-9 ,.'-]+$/i.test(val)){
      this.school_name = val;
      return true;
    }
    else {
      return false;
    }
  }
  
  extraFieldHTML(){
    return `School Name: ${this.school_name}`;
  };
}

module.exports = Intern;

