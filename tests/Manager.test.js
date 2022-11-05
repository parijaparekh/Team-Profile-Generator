const Manager = require('../lib/Manager');

describe('Manager class testing', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an Manager object with name, id and email property set to the values provided through variables name, id and email respectively. Role is set to Manager.", () => {
      // Arrange
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      const office_number = 8984467;
      // Act
      const manager = new Manager(name, id, email, office_number);

      // Assert
      expect(manager.role).toEqual("Manager");
      expect(manager.name).toEqual(name);
      expect(manager.email).toEqual(email);
      expect(manager.id).toEqual(id);
      expect(manager.office_number).toEqual(office_number);
    });

    // usecase wherein no properties are provided to the constructor.
    // This is used in code.
    it("should create the manager object with only role set to Manager", () => { 
      //Act
      const manager = new Manager();
      //Assert
      expect(manager.role).toEqual("Manager");
    });
  });// End of Initialisation

  describe("Set Methods. Validation of user input happens in these methods", () => {
    //GitHub URL 
    describe("setExtraField(). For manager class the extra field is office_number", () => {
        it("numeric strings of any length are allowed",() => {
            //the method will except the following values as github. 
            const name = 'Parija Parekh';
            const email = 'parija.parekh@gmail.com';
            const id = 1234;
            const checkofficenumbers = ["345", "9867647440"];
            let manager = new Manager(name, email, id);
            for (let i = 0; i < checkofficenumbers.length; i++){
            manager.setExtraField(checkofficenumbers[i]);
            expect(manager.office_number).toEqual(checkofficenumbers[i]);
            }//end of for
        });// end of it -- setExtraField() pass cases
    });//end of describe for setExtraField() --office number for manager
  });//end of describe for set() methods
  
  describe("generateHTML()", () => {
    it("This method generates the HTML for the manager object. This generateHTML() even tests extraFieldHTML()", () => {
        const role = "Manager";
        const name = 'Parija Parekh';
        const email = 'parija.parekh@gmail.com';
        const id = 1234;
        const office_number = "345678";
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
                <li class="list-group-item">Office Number: ${office_number}</li>
            </ul>
            </div>
        </div>
        </div>`;
        contentHTML = contentHTML.replace(/(\r\n|\n|\r|\s)/gm, "");
        const manager = new Manager(name, id, email, office_number);
        expect(manager.generateHTML().replace(/(\r\n|\n|\r|\s)/gm, "")).toBe(contentHTML);
    }); //end of it generateHTML
  });//end of describe generateHTML
});// End of manager class testing 