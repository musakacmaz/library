import { add, subtract, foo } from "../src/index";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 5 - 2 to equal 3 ", () => {
  expect(subtract(5, 2)).toBe(3);
});

test('foo() should return "bar"', async () => {
  const s = await foo();
  expect(s).toBe("bar");
});
