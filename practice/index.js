function myName(name, age, live) {
  return `Hello ${name} my age is ${age} I live in ${live}`
}

const sayHEllo = myName("GoSue", 24, "songpa")

console.log(sayHEllo)

const calculator = {
  plus: function (a, b) {
    return a + b
  },
  minus: function (c, d) {
    return c - d
  },
  x: function (o, p) {
    return o * p
  },
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(3, 5)
const x = calculator.x(4, 5)

console.log(plus)
console.log(minus)
console.log(x)
