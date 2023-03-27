const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer", "bi bi-github"); 
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

  //put in as per the coding guidelines
  getGithub(){
    return this.github_url;
  }

  extraFieldHTML(){
    return `Github: <a href=${this.github_url}>${this.github_url}</a>`;
  }

}

module.exports = Engineer;
  