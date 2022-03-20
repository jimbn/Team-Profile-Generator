// Child of emploee
// gitHub - GitHub username
// getGithub()
// getRole - overridden to return 'Engineer'

const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test("set engineer's Github username", () => {
    const engineer = new Engineer('Bob', 12345, 'Bob@foo.com', 'bobgithub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect( typeof(engineer)).toBe('object');
});

test("get engineer's GitHub username",  () => {
    const testGithub = 'bobgithub';
    const engineer = new Engineer( 'Bob', 12345, 'bob@foo.com', testGithub);
    
    expect(engineer.getGithub()).toBe(testGithub);
});

test("get engineer's role", () => {
    const testRole = "Engineer";
    const engineer = new Engineer('Bob', 12345, 'bob@foo.com');

    expect(engineer.getRole()).toBe(testRole);
});

