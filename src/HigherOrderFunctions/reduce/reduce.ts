export const reduce = <T>(
  reducer: (acc: T, curr: T) => T,
  initial: T,
  arr: T[]
): T => {
  let acc = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    acc = reducer(acc, arr[i]);
  }
  return acc;
}