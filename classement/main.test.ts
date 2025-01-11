import { makeRanking } from "./main";
import { ORDER } from "./type";

test("Basic functionality - Ascending order", () => {
  const data = [
    { nom: "Alice", note: 85 },
    { nom: "Bob", note: 70 },
    { nom: "Charlie", note: 95 },
    { nom: "David", note: 80 },
  ];
  const order = ORDER.ASC;
  const result = [
    { nom: "Bob", note: 70, rang: 4 },
    { nom: "David", note: 80, rang: 3 },
    { nom: "Alice", note: 85, rang: 2 },
    { nom: "Charlie", note: 95, rang: 1 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Basic functionality - Descending order", () => {
  const data = [
    { nom: "Alice", note: 85 },
    { nom: "Bob", note: 70 },
    { nom: "Charlie", note: 95 },
    { nom: "David", note: 80 },
  ];
  const order = ORDER.DESC;
  const result = [
    { nom: "Charlie", note: 95, rang: 1 },
    { nom: "Alice", note: 85, rang: 2 },
    { nom: "David", note: 80, rang: 3 },
    { nom: "Bob", note: 70, rang: 4 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Single item dataset", () => {
  const data = [{ nom: "Alice", note: 85 }];
  const order = ORDER.ASC;
  const result = [{ nom: "Alice", note: 85, rang: 1 }];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Empty dataset", () => {
  const data: any[] = [];
  const order = ORDER.ASC;
  const result: any[] = [];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Ties in scores", () => {
  const data = [
    { nom: "Alice", note: 85 },
    { nom: "Bob", note: 85 },
    { nom: "Charlie", note: 70 },
    { nom: "David", note: 70 },
  ];
  const order = ORDER.ASC;
  const result = [
    { nom: "Charlie", note: 70, rang: 4 },
    { nom: "David", note: 70, rang: 3 },
    { nom: "Alice", note: 85, rang: 2 },
    { nom: "Bob", note: 85, rang: 1 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Negative scores", () => {
  const data = [
    { nom: "Alice", note: -85 },
    { nom: "Bob", note: -70 },
    { nom: "Charlie", note: -95 },
    { nom: "David", note: -80 },
  ];
  const order = ORDER.ASC;
  const result = [
    { nom: "Charlie", note: -95, rang: 4 },
    { nom: "Alice", note: -85, rang: 3 },
    { nom: "David", note: -80, rang: 2 },
    { nom: "Bob", note: -70, rang: 1 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Unsorted input", () => {
  const data = [
    { nom: "David", note: 80 },
    { nom: "Charlie", note: 95 },
    { nom: "Alice", note: 85 },
    { nom: "Bob", note: 70 },
  ];
  const order = ORDER.ASC;
  const result = [
    { nom: "Bob", note: 70, rang: 4 },
    { nom: "David", note: 80, rang: 3 },
    { nom: "Alice", note: 85, rang: 2 },
    { nom: "Charlie", note: 95, rang: 1 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});

test("Floating-point scores", () => {
  const data = [
    { nom: "Alice", note: 85.5 },
    { nom: "Bob", note: 70.3 },
    { nom: "Charlie", note: 95.8 },
    { nom: "David", note: 80.1 },
  ];
  const order = ORDER.ASC;
  const result = [
    { nom: "Bob", note: 70.3, rang: 4 },
    { nom: "David", note: 80.1, rang: 3 },
    { nom: "Alice", note: 85.5, rang: 2 },
    { nom: "Charlie", note: 95.8, rang: 1 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});

test("All scores equal", () => {
  const data = [
    { nom: "Alice", note: 85 },
    { nom: "Bob", note: 85 },
    { nom: "Charlie", note: 85 },
    { nom: "David", note: 85 },
  ];
  const order = ORDER.ASC;
  const result = [
    { nom: "Alice", note: 85, rang: 4 },
    { nom: "Bob", note: 85, rang: 3 },
    { nom: "Charlie", note: 85, rang: 2 },
    { nom: "David", note: 85, rang: 1 },
  ];
  expect(makeRanking(data, order)).toEqual(result);
});
