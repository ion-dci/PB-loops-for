const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ /g, "");

const solution = rewire("../solution");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("For Loops", () => {
  test("1. Addition: the sum of the numbers 1 to 20 must be printed in the terminal", () => {
    const solution = require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(210);
  });
  test("2. There are i bottles of beer on the wall: must be printed 5 times in the terminal where i equals each number from 1 to 5", () => {
    const solution = require("../solution");
    for (let i = 1; i <= 5; i++) {
      if (i > 1) {
        expect(consoleSpy).toHaveBeenCalledWith(
          `There are ${i} bottles of beer on the wall.`
        );
      } else {
        expect(consoleSpy).toHaveBeenCalledWith(
          `There is ${i} bottle of beer on the wall.`
        );
      }
    }
  });
  test("3. The odd/even reporter: each number between 0 and 20 must be printed in the terminal using the correct form ('i is even' or 'i is odd')", () => {
    const solution = require("../solution");
    for (let i = 0; i <= 20; i++) {
      if (i % 2 == 0) {
        expect(consoleSpy).toHaveBeenCalledWith(`${i} is even`);
      } else {
        expect(consoleSpy).toHaveBeenCalledWith(`${i} is odd`);
      }
    }
  });
  test("4. Multiplication Tables: the multiplication of each number between 1 and 10 by 9 must be printed in the terminal", () => {
    const solution = require("../solution");
    const ConsoleLogsArr = consoleSpy.mock.calls
    for (let i = 0; i <= 10; i ++) {
     expect(ConsoleLogsArr.some(x=>x.join("").replace(/ /g, "").includes(`${i*9}`))).toBeTruthy();
  }
  });
  test("5. Fizz Buzz", () => {
    const solution = require("../solution");
    const ConsoleLogsArr = consoleSpy.mock.calls
     expect(ConsoleLogsArr.filter(x=>x.join("")=="FizzBuzz").length).toEqual(6);
     expect(ConsoleLogsArr.filter(x=>x.join("")=="Fizz").length).toEqual(27);
     expect(ConsoleLogsArr.filter(x=>x.join("")=="Buzz").length).toEqual(14);
  
  });
  test("6. Sum of Multiples", () => {
    const solution = require("../solution");
    const ConsoleLogsArr = consoleSpy.mock.calls
    expect(ConsoleLogsArr.some(x=>x.join("").includes('33165'))).toBeTruthy();
  });

});
