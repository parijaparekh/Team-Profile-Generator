const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer"); 
    this.github_url = github; 
  }

  extraFieldHTML(){
    return `Github: ${this.github_url}`;
  }

}

module.exports = Engineer;
  