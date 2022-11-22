// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('No parentheses no dash phone number', () => {
    expect(functions.isPhoneNumber('4155552671')).toBe(false);
});

test('Special Characters in phone number', () => {
    expect(functions.isPhoneNumber('06833&')).toBe(false);
});

test('Valid phone number', () => {
    expect(functions.isPhoneNumber('(415)555-2671')).toBe(true);
});

test('Valid phone number with spaces', () => {
    expect(functions.isPhoneNumber('(333) 333-3333')).toBe(true);
});

test('Invalid characters Email', () => {
    expect(functions.isEmail("working!!de@gmail.com")).toBe(false);
});

test('No @', () => {
    expect(functions.isEmail("workinggmail.com")).toBe(false);
});

test('Working email', () => {
    expect(functions.isEmail("working@gmail.com")).toBe(true);
});

test('Uppercase lower-case email', () => {
    expect(functions.isEmail("wOrKiNg@gmail.com")).toBe(true);
});

test('Password too short', () => {
    expect(functions.isStrongPassword('pas')).toBe(false);
});

test('Password too long', () => {
    expect(functions.isStrongPassword('Alowijjujujujuujujujuj')).toBe(false);
});

test('Good password', () => {
    expect(functions.isStrongPassword('Alowi')).toBe(true);
});

test('Password with uppercase', () => {
    expect(functions.isStrongPassword('AlOdL')).toBe(true);
});

test('Too many characters Date', () => {
    expect(functions.isDate('12/03/20011')).toBe(false);
});

test('No slash', () => {
    expect(functions.isDate('3052001')).toBe(false);
});

test('Correct date', () => {
    expect(functions.isDate('03/03/2001')).toBe(true);
});

test('Other Correct date', () => {
    expect(functions.isDate('1/03/2001')).toBe(true);
});

test('Too long Hex', () => {
    expect(functions.isHexColor('#FFFFFFFFF')).toBe(false);
});

test('Invalid Hex', () => {
    expect(functions.isHexColor('#?feEd')).toBe(false);
});

test('6 Characters Hex', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('3 Characters Hex', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});