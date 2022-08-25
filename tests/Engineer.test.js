const Engineer = require('../lib/Engineer');

describe('Engineer Class:', () => {
    describe('It creates a new object:', () => {
        it('should create a new instance of a Engineer class with a name, id, email, and github', () => {
            const newEngineer = new Engineer('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', 'NaNifer');
            expect(newEngineer).toBeInstanceOf(Engineer);
            expect(newEngineer.empName).toBe('Mary');
            expect(newEngineer.empId).toBe(3);
            expect(newEngineer.empEmail).toBe('maryhadalittlelamb@baaaaaaa.com');
            expect(newEngineer.githubUser).toBe('NaNifer');
        })
    })

    describe('getRole() methods overrides the Employee class method', () => {

        it('getRole() method should return "Engineer"', () => {
            const newEngineer = new Engineer('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', 'NaNifer');
            expect(newEngineer.getRole()).toBe('Engineer');
        });
    });

    describe('getGithub() method', () => {
        it('should return the Github username passed into the parameters on creation', () => {
            const newEngineer = new Engineer('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', 'NaNifer');
            expect(newEngineer.getGithubUser()).toBe('NaNifer');
        });
    });
});