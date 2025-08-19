class GuessingGame {
  constructor() {
    this.first = 0;
    this.last = 0;
  }

  setRange(min, max) {
    this.first = min;
    this.last = max;
  }

  guess() {
    return Math.round(this.first + (this.last - this.first) / 2);
  }

  lower() {
    this.last = this.guess();
  }

  greater() {
    this.first = this.guess();
  }
}

module.exports = GuessingGame;
