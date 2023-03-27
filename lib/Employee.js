class Employee {
  constructor(name, id, email, role, icon) {
    this.name = name;
    this.id = id;
    this.email = email;
    
    if (role !== undefined){ 
      this.role = role;
      this.icon = icon;
      //console.log(icon);
    }
    else{
      this.role = "Employee";
      this.icon = "bi bi-person";
    }
  }

  setName(name){
    if (/^[a-z ,.'-]+$/i.test(name)){
      this.name = name;
      return true;
    }
    else {
      return false;
    }
  }

  setEmail(email){
    email = email.toLowerCase();
    if (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[a-z0-9.-]+.[a-z0-9]$/.test(email)){
      this.email = email;
      return true;
    }
    else{
      return false;
    }
  }

  setId(id){
    if (/^\d+$/.test(id)){
      this.id = id;
      return true;
    }
    else {
      return false;
    }
  }

  setExtraField(val){
    // no extra field here.
  }

  getName(){
    console.log(`Employee Name: ${this.name}`);
    return this.name;
  }

  getId(){
    console.log(`Id: ${this.id}`);
    return this.id;
  }

  getEmail(){
    console.log(`Email: ${this.email}`);
    return this.email;
  }

  getRole(){
    console.log(`Role is: ${this.role}`);
    return this.role;
  }

  generateHTML(){
    return `<div class="col">
              <div class="card">
                <div class="card-body">
                    <h5 class="card-header">
                        <p>${this.name}<br>${this.role}
                        <span class="${this.icon}"> </span>
                        </p>
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${this.id}</li>
                        <li class="list-group-item">Email: <a href = "mailto: ${this.email}">${this.email}</a></li>
                        <li class="list-group-item">${this.extraFieldHTML()}</li>
                    </ul>
                </div>
              </div>
            </div>`;
  }

  extraFieldHTML(){
    return ``;
  }
}

module.exports = Employee;
