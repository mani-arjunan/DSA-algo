import { twoCrystalBalls } from "../algos/twocrystalballs";

test("two crystal balls", function () {
  let idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  expect(twoCrystalBalls(data)).toEqual(idx);
  expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
});

test("two crystal balls test 2g", () => {
  let idx = Math.floor(Math.random() * 100);
  const data = new Array(100).fill(false);

  // for (let i = idx; i < 100; ++i) {
  // 	data[i] = true;
  // }

  data[99] = true
  expect(twoCrystalBalls(data)).toEqual(99);
  expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
});
