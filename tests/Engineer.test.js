const Engineer = require('../lib/Engineer');

describe('Engineer Class:', () => {
    describe('It creates a new object:', () => {
        it('should create a new instance of a Engineer class with a name, id, email, and github', () => {
            const obj = new Engineer('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', 'NaNifer');
            expect(obj).toBeInstanceOf(Engineer);
            expect(obj.name).toBe('Mary');
            expect(obj.id).toBe(3);
            expect(obj.email).toBe('maryhadalittlelamb@baaaaaaa.com');
            expect(obj.github).toBe('NaNifer');
        })
    })

    describe('getRole() methods overrides the Employee class method', () => {

        it('getRole() method should return "Engineer"', () => {
            const obj = new Engineer('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', 'NaNifer');
            expect(obj.getRole()).toBe('Engineer');
        });
    });

    describe('getGithub() method', () => {
        it('should return the Github username passed into the parameters on creation', () => {
            const obj = new Engineer('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', 'NaNifer');
            expect(obj.getGithub()).toBe('NaNifer');
        });
    });
});