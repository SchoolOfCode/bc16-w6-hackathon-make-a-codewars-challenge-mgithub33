import { findTheMissingDay } from "./main.js";
import { test, expect } from "vitest";

test("should be day 3 missing", () => {
  const days = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
  const expected = 3;
  expect(findTheMissingDay(days)).toBe(expected);
});

test("should be day 2 missing", () => {
  const days = [[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
  const expected = 2;
  expect(findTheMissingDay(days)).toBe(expected);
});

test("Throws an error from an empty input", () => {
  expect(() => findTheMissingDay(undefined)).toThrowError(
    /Empty input detected/
  );
});
