const Manager = require('../lib/Manager.js');

test("set manager's office number", () => {
    const manager = new Manager('Bob', 12345, 'Bob@foo.com', 8884441111);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
    expect( typeof(manager)).toBe('object');
});

test("get manager's office number",  () => {
    const testOffice = 8884441111;
    const manager = new Manager( 'Bob', 12345, 'bob@foo.com', testOffice);
    
    expect(manager.getOffice()).toBe(testOffice);
});

test("get manager's role", () => {
    const testRole = "Manager";
    const manager = new Manager('Bob', 12345, 'bob@foo.com');

    expect(manager.getRole()).toBe(testRole);
});

