import { Input, ORDER, Output } from "./type";

export function makeRanking(data: Input[], order: ORDER): Output[] {
  const orderValue = order == ORDER.ASC ? 1 : -1;

  const sortedData = data.sort((a, b) => (a.note - b.note) * orderValue);

  const result = sortedData.map((value, index, array) => ({
    ...value,
    rang: orderValue == 1 ? array.length - index : index + 1,
  }));

  return result;
}
