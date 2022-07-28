const Employee = require('../lib/Employee');

describe('Employee Class:', () => {
    describe('It creates a new object:', () => {
        it('Should create a new instance of Employee object with a name, id, and email', () => {
            const obj = new Employee('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com');
            expect(obj).toBeInstanceOf(Employee);
            expect(obj.name).toBe('Mary');
            expect(obj.id).toBe(3);
            expect(obj.email).toBe('maryhadalittlelamb.com');
        })
    })

    describe('Methods return correct data:', () => {
        it('Has a getName() method that returns the object name', () => {
            const obj = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(obj.getName()).toBe('Mary');
        });

        it('Has a getId() method that returns the object ID', () => {
            const obj = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(obj.getId()).toBe(5);
        });

        it('Has a getEmail() method that returns the object email', () => {
            const obj = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(obj.getEmail()).toBe('maryhadalittlelamb.com');
        });

        it('Has a getRole() method that returns the object role', () => {
            const obj = new Employee('Mary', 3, 'maryhadalittlelamb.com');
            expect(obj.getRole()).toBe('Employee');
        });
    });
});