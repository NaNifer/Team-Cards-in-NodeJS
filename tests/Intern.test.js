const Intern = require('../lib/Intern');

describe('Intern Class:', () => {
    describe('It creates a new object:', () => {
        it('should create a new instance of an Intern with a name, id, email, and school', () => {
            const newIntern = new Intern('Drake', 9, 'drake@SFSU.edu', 'SFSU');
            expect(newIntern).toBeInstanceOf(Intern);
            expect(newIntern.name).toBe('Drake');
            expect(newIntern.id).toBe(9);
            expect(newIntern.email).toBe('drake@SFSU.edu');
            expect(newIntern.school).toBe('SFSU');
        })
    })

    describe('getRole() method overrides the Employee class method', () => {

        it('should return "Intern"', () => {
            const newIntern = new Intern('Drake', 9, 'drake@SFSU.edu', 'SFSU');
            expect(newIntern.getRole()).toBe('Intern');
        });
    });

    describe('getSchool() method', () => {
        it('should return the school passed into the parameters on creation', () => {
            const newIntern = new Intern('Drake', 9, 'drake@SFSU.edu', 'SFSU');
            expect(newIntern.getSchool()).toBe('SFSU');
        });
    });
});