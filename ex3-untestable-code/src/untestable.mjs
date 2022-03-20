import fs from "fs";

export function sum(a, b) {
  return a + b;
}

export function now() {
  let time = new Date(Date.now()).toISOString();
  return time;
}

export function readFile() {
  try {
    return fs.readFileSync("file.txt", "ascii");
  } catch (err) {
    console.log(err);
  }
}
