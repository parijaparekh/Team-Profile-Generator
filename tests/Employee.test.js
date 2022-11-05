const Employee = require('../lib/Employee');

describe('Employee class testing', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an Employee object with name, id, email and role property set to the values provided through variables name, id, email and role respectively", () => {
      // Arrange
      const role = "Manager";
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      // Act
      const employee = new Employee(name, id, email, role);

      // Assert
      expect(employee.role).toEqual(role);
      expect(employee.name).toEqual(name);
      expect(employee.email).toEqual(email);
      expect(employee.id).toEqual(id);
    });

    // usecase wherein only role is provided at the time of employee object creation.
    // This is used in code.
    it("should create the employee object with only role variable provided", () => {
      // Arrange
      const role = "Engineer"; 
      //Act
      const employee = new Employee("","","",role);
      //Assert
      expect(employee.role).toEqual(role);
    });

    it("should create the employee object with role set to Employee if role is not provided", () => {
      // Arrange
      //Act
      const employee = new Employee();
      //Assert
      expect(employee.role).toEqual("Employee");
    });
  });// End of Initialisation

  describe("Set Methods. Validation of user input happens in these methods", () => {
    describe("setName(). Validation for name is done in this method.", () => {
      it("Following strings are allowed:[Parija, Parija Parekh, Parija Jr., Parija D'Costa, Parekh, Parija, Parija Mehta-Parekh]",() => {
        //the method will except the following values as Name. 
        //Parija, Parija Parekh, Parija Jr., Parija D'Costa, Parekh, Parija, Parija Mehta-Parekh  
        const checkNames = ["Parija", "Parija Parekh", "Parija Jr.", "Parija D'Costa", "Parekh, Parija", "Parija Mehta-Parekh" ];
        let employee = new Employee();
        for (let i = 0; i < checkNames.length; i++){
          employee.setName(checkNames[i]);
          expect(employee.name).toEqual(checkNames[i]);
        }//end of for
      });// end of it -- setName() pass cases
      
      it("Strings with nos. and special charachters: $#@!%^&*()[]{}></ should throw error", () => {
        const incorrectNames = ["Parija122313", "Parija Par$$$$$$", "Parija*(**(@!#!", "parija[][]{}"];
        let employee = new Employee();
        for (let i = 0; i < incorrectNames.length; i++){
          employee.setName(incorrectNames[i]);
          expect(employee.name).toBe(undefined);
        }//end of for
      });//end of it -- setName() fail cases
    });//end of describe for set name()

    //Email. 
    describe("setEmail(). Validation for email is done in this method.", () => {
      it("Following strings are allowed:[abc@gmail.com, abc123@gmail.com, abc123###@gmail.com, abc.xyz$$$@gmail123.com, abc_xyz@nogetter.column11, AVC234_%&'/={}~^`@90878.-abc.co908]",() => {
        //the method will except the following values as Email. 
        //abc@gmail.com, abc123@gmail.com, abc123###@gmail.com, abc.xyz$$$@gmail123.com, abc_xyz@nogetter.column11, AVC234_%&'/={}~^`@90878.-abc.co908
        const checkEmail = ["abc@gmail.com", "abc123@gmail.com", "abc123###@gmail.com", "abc.xyz$$$@gmail123.com", "abc_xyz@nogetter.column11", "AVC234_%&'/={}~^`@90878.-abc.co908"];
        let employee = new Employee();
        for (let i = 0; i < checkEmail.length; i++){
          employee.setEmail(checkEmail[i]);
          expect(employee.email).toEqual(checkEmail[i].toLowerCase());
        }//end of for
      });// end of it -- setEmail() pass cases
      
      it("Strings with [],@ more than once and any special charachters in domain name should throw error", () => {
        const incorrectEmails = ["abc@@gmail.com", "abc[[]]@gmail.com", "abc@gmail.com.()", "abc@gmail@123.com"];
        let employee = new Employee();
        for (let i = 0; i < incorrectEmails.length; i++){
          employee.setEmail(incorrectEmails[i]);
          expect(employee.email).toBe(undefined);
        }//end of for
      });//end of it -- setEmail() fail cases
    });//end of describe for setEmail()

    //Id 
    describe("setId(). Validation for id is done in this method.", () => {
      it("any number only string is allowed",() => {
        //the method will except the following values as Id. 
        //1,12,12131,1213131212412
        const checkIds = ["1","12","12131","1213131212412"];
        let employee = new Employee();
        for (let i = 0; i < checkIds.length; i++){
          employee.setId(checkIds[i]);
          expect(employee.id).toEqual(checkIds[i]);
        }//end of for
      });// end of it -- setId() pass cases
      
      it("Alphanumeric should throw error", () => {
        const incorrectIds = ["123@@", "123eqwewe", "123$$$fhakf123"];
        let employee = new Employee();
        for (let i = 0; i < incorrectIds.length; i++){
          employee.setId(incorrectIds[i]);
          expect(employee.id).toBe(undefined);
        }//end of for
      });//end of it -- setId() fail cases
    });//end of describe for setId()
  });//end of describe for set() methods
  
  describe("Get Methods. Cuurently these methods are not implemented but testing is provided for them", () => {
    it("getName(). It should return the name property and console log the same",() => {
      const role = "Manager";
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      // Act
      const employee = new Employee(name, id, email, role);
      expect(employee.getName()).toEqual(name);
    });//end of it -- getName()

    it("getRole(). It should return the role property and console log the same",() => {
      const role = "Manager";
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      // Act
      const employee = new Employee(name, id, email, role);
      expect(employee.getRole()).toEqual(role);
    });//end of it -- getRole()

    it("getId(). It should return the Id property and console log the same",() => {
      const role = "Manager";
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      // Act
      const employee = new Employee(name, id, email, role);
      expect(employee.getId()).toEqual(id);
    });//end of it -- getId()

    it("getEmail(). It should return the email property and console log the same",() => {
      const role = "Manager";
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      // Act
      const employee = new Employee(name, id, email, role);
      expect(employee.getEmail()).toEqual(email);
    });//end of it -- getEmail()
  });//end of describe for getters  

  describe("generateHTML()", () => {
    it("This method generates the HTML for this employee object", () => {
      const role = "Manager";
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      let contentHTML = 
      `<div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-header">
                <p>${name}<br>${role}
                <img src="..." class="card-img-top">
                </p>
            </h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>`;
      contentHTML = contentHTML.replace(/(\r\n|\n|\r|\s)/gm, "");
      const employee = new Employee(name, id, email, role);
      expect(employee.generateHTML().replace(/(\r\n|\n|\r|\s)/gm, "")).toBe(contentHTML);
    }); //end of it generateHTML
  });//end of describe generateHTML
});// End of Employee class testing 