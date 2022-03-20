import fs from "fs";

let _instance;

export class UntestableSingleton {
  constructor() {
    if (!_instance) {
      _instance = this;
    } else {
      return _instance;
    }
  }

  sum(a, b) {
    return a + b;
  }

  nowPlusRandom(maximumRandomSeconds) {
    let time = new Date(Date.now());
    let randomSeconds = Math.floor(Math.random() * maximumRandomSeconds);
    time.setSeconds(time.getSeconds() + randomSeconds);
    return time.toISOString();
  }

  readFile() {
    try {
      return fs.readFileSync("file.txt", "ascii");
    } catch (err) {
      console.log(err);
    }
  }
}
