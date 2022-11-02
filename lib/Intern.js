const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school_name) {
    super(name, id, email, "Intern");  
    this.school_name = school_name;
  };
  
  extraFieldHTML(){
    return `School Name: ${this.school_name}`;
  };
}

module.exports = Intern;

