const calculator = {
  plus: function (a, b) {
    return a + b
  },
  minus: function (a, b) {
    return a - b
  },
  x: function (a, b) {
    return a * b
  },
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(3, 5)
const x = calculator.x(4, 5)

console.log(plus)
console.log(minus)
console.log(x)
