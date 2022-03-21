const Intern = require('../lib/Intern.js');

test("set intern's school", () => {
    const intern = new Intern('Bob', 12345, 'Bob@foo.com', 'UCB');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect( typeof(intern)).toBe('object');
});

test("get intern's school",  () => {
    const testSchool = 'UCB';
    const intern = new Intern( 'Bob', 12345, 'bob@foo.com', testSchool);
    
    expect(intern.getSchool()).toBe(testSchool);
});

test("get intern's role", () => {
    const testRole = "Intern";
    const intern = new Intern('Bob', 12345, 'bob@foo.com');

    expect(intern.getRole()).toBe(testRole);
});

