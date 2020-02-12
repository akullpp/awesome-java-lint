module.exports = class Monad {
  static of(value) {
    return new Monad(value)
  }

  constructor(value) {
    this.value = value
  }

  map(f) {
    return Monad.of(f(this.value))
  }

  ap(monad) {
    return monad.map(this.value)
  }

  chain(f) {
    return this.map(f).value
  }
}
