import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type RectangleArea = {
  width: number;
  height: number;
};

const getRectangleArea = (rectangle: RectangleArea) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: RectangleArea) => {
  return 2 * (rectangle.width + rectangle.height);
};

it("should return the area of a rectangle", () => {
  const result = getRectangleArea({
    width: 10,
    height: 20,
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(200);
});

it("should return the perimeter of a rectangle", () => {
  const result = getRectanglePerimeter({
    width: 10,
    height: 20,
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(60);
});
