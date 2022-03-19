const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');


// Has the following
// name
// id
// email
// getName()
// getid()
// getEmail()
// getRole() - Returns 'Employee'

test('create an employee object', () => {
    const employee = new Employee('Bob', 12345, 'Bob@foo.com');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect( typeof(employee)).toBe('object');
});

test("get employee's name", () => {
    const testName = 'Bob';
    const employee = new Employee (testName);

    expect(employee.getName()).toBe(testName);
});

test("get employee's id", () => {
    const testId = 12345;
    const employee = new Employee ('Bob', testId);
    
    expect(employee.getId()).toBe(testId);
});

test("get employee's email", () => {
    const testEmail = 'Bob@foo.com';
    const employee = new Employee ('Bob', 12345, testEmail);

    expect(employee.getEmail()).toBe(testEmail);
});


test("get employee's role",  () => {
    const testRole = 'Employee';
    const employee = new Employee ('Bob', 12345, 'Bob@foo.com');

    expect(employee.getRole()).toBe(testRole);
});

