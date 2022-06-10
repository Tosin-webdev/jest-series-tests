const {
  calculateSum,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../math");

test("should calculate the sum of both values", () => {
  const total = calculateSum(10, 30);

  //   Expect the value stored in the total variable to be 13
  expect(total).toBe(40);

  //   if (total !== 40) {
  //     throw new Error("Total tip should be 13, Got" + total);
  //   }
});

test("should add values", () => {
  const total = calculateSum(1, 4);
  expect(total).toBe(5);
});

test("convert fahrenheit to celsius", () => {
  const conversion = fahrenheitToCelsius(93.2);
  expect(conversion).toBe(34);
});

test("celsius to fahrenheit", () => {
  const conversion = celsiusToFahrenheit(34);
  expect(conversion).toBe(93.2);
});

// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("should add two numbers asyncronously", async () => {
  const sum = await add(0, 22);
  expect(sum).toBe(22);
});
