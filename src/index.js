export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export async function foo() {
  const s = await bar();
  return s;
}

async function bar() {
  await sleep(1000);
  return "bar";
}

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

const user = new User("John");
user.setName("Jane");
