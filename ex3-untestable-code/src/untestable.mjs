export function sum(a, b) {
  return a + b;
}

export function now() {
  let time = new Date(Date.now()).toISOString();
  console.log(time);
  return time;
}
