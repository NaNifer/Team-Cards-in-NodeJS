const Employee = require('../lib/Employee');

describe('Employee Class:', () => {
    describe('It creates a new object:', () => {
        it('Should create a new instance of Employee object with a name, id, and email', () => {
            const newEmpl = new Employee('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com');
            expect(newEmpl).toBeInstanceOf(Employee);
            expect(newEmpl.name).toBe('Mary');
            expect(newEmpl.id).toBe(3);
            expect(newEmpl.email).toBe('maryhadalittlelamb.com');
        })
    })

    describe('Methods return correct data:', () => {
        it('Has a getName() method that returns the object name', () => {
            const newEmpl = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(newEmpl.getEmpName()).toBe('Mary');
        });

        it('Has a getId() method that returns the object ID', () => {
            const newEmpl = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(newEmpl.getEmpId()).toBe(5);
        });

        it('Has a getEmail() method that returns the object email', () => {
            const newEmpl = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(newEmpl.getEmail()).toBe('maryhadalittlelamb.com');
        });

        it('Has a getRole() method that returns the object role', () => {
            const newEmpl = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(newEmpl.getRole()).toBe('Employee');
        });
    });
});