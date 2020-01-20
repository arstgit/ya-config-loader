let assert = require("assert");
let result1 = require("./app");
let result2 = require("./app/t1");

let expected = {
  port: 5002,
  name: "envName"
};

assert.deepStrictEqual(expected, result1);
assert.deepStrictEqual(expected, result2);

console.log("test passed!");
