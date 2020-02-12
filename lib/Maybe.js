const Monad = require('./Monad')

module.exports = class Maybe extends Monad {
  static of(value) {
    return new Maybe(value)
  }

  constructor(value) {
    super(value)
  }

  isNothing() {
    return this.value === null || this.value === undefined
  }

  map(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.value))
  }
}
