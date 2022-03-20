import fs from "fs";

let _instance;

export class UntestableSingleton {
  maximumRandomSeconds;

  constructor() {
    if (!_instance) {
      _instance = this;
      this.maximumRandomSeconds = 10;
    } else {
      return _instance;
    }
  }

  setMaximumRandomSeconds(newSeconds) {
    this.maximumRandomSeconds = newSeconds;
  }

  secondsBetweenFileDateAndRandomFuture() {
    let fileDate = Date.parse(this._readFile());
    let randomFuture = Date.parse(this._nowPlusRandom());
    return Math.floor((randomFuture - fileDate) / 1000);
  }

  _nowPlusRandom() {
    let time = new Date(Date.now());
    let randomSeconds = Math.floor(Math.random() * this.maximumRandomSeconds);
    time.setSeconds(time.getSeconds() + randomSeconds);
    return time.toISOString();
  }

  _readFile() {
    try {
      return fs.readFileSync("file.txt", "ascii").trim();
    } catch (err) {
      console.log(err);
    }
  }
}
