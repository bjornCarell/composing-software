export type X = {
  val: number,
}

export const double = (x: X) => ({ ...x, val: x.val * 2 });