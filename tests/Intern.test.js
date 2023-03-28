const Intern = require('../lib/Intern');

describe('Intern class testing', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an Intern object with name, id and email property set to the values provided through variables name, id and email respectively. Role is set to Intern.", () => {
      // Arrange
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      const school_name = "St. Thomas School";
      const icon = "bi bi-person";
      // Act
      const intern = new Intern(name, id, email, school_name);

      // Assert
      expect(intern.role).toEqual("Intern");
      expect(intern.name).toEqual(name);
      expect(intern.email).toEqual(email);
      expect(intern.id).toEqual(id);
      expect(intern.school_name).toEqual(school_name);
      expect(intern.icon).toEqual(icon);
    });

    // usecase wherein no properties are provided to the constructor.
    // This is used in code.
    it("should create the Intern object with only role set to Intern", () => { 
      //Act
      const intern = new Intern();
      //Assert
      expect(intern.role).toEqual("Intern");
      expect(intern.icon).toEqual("bi bi-person");
    });
  });// End of Initialisation

  describe("Set Methods. Validation of user input happens in these methods", () => {
    //school names 
    describe("setExtraField(). For Intern class the extra field is school_name", () => {
        it("Strings with alphanumeric charachters and some special charachters viz. {.'-} are allowed: ",() => {
            //the method will except the following values as github. 
            const name = 'Parija Parekh';
            const email = 'parija.parekh@gmail.com';
            const id = 1234;            
            const checkSchoolNames = ["St. Mary's Anglican School", "Hale School - Since 1858"];
            let intern = new Intern(name, email, id);
            for (let i = 0; i < checkSchoolNames.length; i++){
            intern.setExtraField(checkSchoolNames[i]);
            expect(intern.school_name).toEqual(checkSchoolNames[i]);
            }//end of for
        });// end of it -- setExtraField() pass cases
    });//end of describe for setExtraField() --school_name for intern
  });//end of describe for set() methods
});// End of intern class testing 