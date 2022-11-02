class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    if (role !== undefined){ 
      this.role = role;
    }
    else{
      this.role = "Employee"
    }
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
                        <img src="..." class="card-img-top">
                        </p>
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email}</li>
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
