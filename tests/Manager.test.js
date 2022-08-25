const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager Class:', () => {
    describe('It creates a new object:', () => {
        it('should create a new instance of a Manager class with a name, id, email, and office number', () => {
            const newMgr = new Manager('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', '42');
            expect(newMgr).toBeInstanceOf(Manager);
            expect(newMgr.name).toBe('Mary');
            expect(newMgr.id).toBe(3);
            expect(newMgr.email).toBe('maryhadalittlelamb@baaaaaaa.com');
            expect(newMgr.officeNumber).toBe('42');
        })
    })

    describe('getRole() methods overrides the Employee class method', () => {

        it('getRole() method should return "Manager"', () => {
            const newMgr = new Manager('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', '42');
            expect(newMgr.getRole()).toBe('Manager');
        });
    });

    describe('getGithub() method', () => {
        it('should return the office number passed into the parameters on creation', () => {
            const newMgr = new Manager('Mary', 3, 'maryhadalittlelamb@baaaaaaa.com', '42');
            expect(newMgr.getOfficeNumber()).toBe('42');
        });
    });
});