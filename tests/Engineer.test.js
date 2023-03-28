const Engineer = require('../lib/Engineer');
//testing is done for constructor and for checking the role set to engineer.
//for setExtraField() method for githuburl.
describe('Engineer class testing', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an Engineer object with name, id and email property set to the values provided through variables name, id and email respectively. Role is set to Engineer. Icon is set to bi bi-github", () => {
      // Arrange
      const name = 'Parija Parekh';
      const email = 'parija.parekh@gmail.com';
      const id = 1234;
      const githuburl = "https://github.com/parijaparekh";
      const icon = "bi bi-github";
      // Act
      const engineer = new Engineer(name, id, email, githuburl);

      // Assert
      expect(engineer.role).toEqual("Engineer");
      expect(engineer.name).toEqual(name);
      expect(engineer.email).toEqual(email);
      expect(engineer.id).toEqual(id);
      expect(engineer.icon).toEqual(icon);
      expect(engineer.github_url).toEqual(githuburl);
    });

    // usecase wherein no properties are provided to the constructor.
    // This is used in code.
    it("should create the engineer object with only role set to Engineer", () => { 
      //Act
      const engineer = new Engineer();
      //Assert
      expect(engineer.icon).toEqual("bi bi-github");
      expect(engineer.role).toEqual("Engineer");
    });
  });// End of Initialisation

  describe("Set Methods. Validation of user input happens in these methods", () => {
    //GitHub URL 
    describe("setExtraField(). For engineer class the extra field is gitHub Url", () => {
        it("Following strings are allowed: http://www.github.com/parija123.parekh#$%&*, https://www.github.com/parija$$$$, http://github.com/{}~^.iamcoder",() => {
            //the method will except the following values as github. 
            const name = 'Parija Parekh';
            const email = 'parija.parekh@gmail.com';
            const id = 1234;
            const checkGithub = ["http://www.github.com/parija123.parekh#$%&'*%%", "https://www.github.com/parija$$$$", "http://github.com/{}~^.iamcoder"];
            let engineer = new Engineer(name, email, id);
            for (let i = 0; i < checkGithub.length; i++){
            engineer.setExtraField(checkGithub[i]);
            expect(engineer.github_url).toEqual(checkGithub[i]);
            }//end of for
        });// end of it -- setExtraField() pass cases
    });//end of describe for setExtraField() --github URL for engineer
  });//end of describe for set() methods
});// End of engineer class testing 