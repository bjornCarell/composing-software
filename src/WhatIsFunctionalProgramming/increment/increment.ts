export type X = {
  val: number,
}

export const inc = (x: X) => ({ ...x, val: x.val + 1 });