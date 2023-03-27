const Employee =  require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, office_number) {
    super(name, id, email, "Manager", "bi bi-people");
    this.office_number = office_number;   
  }

  setExtraField(val){
    if (/^\d+$/.test(val)){
      this.office_number = val;
      return true;
    }
    else {
      return false;
    }
  }

  getOfficeNumber(){
    console.log(`Office number is: ${this.office_number}`);
    return this.office_number;
  }

  extraFieldHTML(){
    return `Office Number: ${this.office_number}`;
  }
}

module.exports = Manager;
