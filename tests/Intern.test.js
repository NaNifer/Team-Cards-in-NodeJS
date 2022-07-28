const Intern = require('../lib/Intern');

describe('Intern Class:', () => {
    describe('It creates a new object:', () => {
        it('should create a new instance of an Intern with a name, id, email, and school', () => {
            const obj = new Intern('Drake', 9, 'drake@SFSU.edu', 'SFSU');
            expect(obj).toBeInstanceOf(Intern);
            expect(obj.name).toBe('Drake');
            expect(obj.id).toBe(9);
            expect(obj.email).toBe('drake@SFSU.edu');
            expect(obj.school).toBe('SFSU');
        })
    })

    describe('getRole() method overrides the Employee class method', () => {

        it('should return "Intern"', () => {
            const obj = new Intern('Drake', 9, 'drake@SFSU.edu', 'SFSU');
            expect(obj.getRole()).toBe('Intern');
        });
    });

    describe('getSchool() method', () => {
        it('should return the school passed into the parameters on creation', () => {
            const obj = new Intern('Drake', 9, 'drake@SFSU.edu', 'SFSU');
            expect(obj.getSchool()).toBe('SFSU');
        });
    });
});