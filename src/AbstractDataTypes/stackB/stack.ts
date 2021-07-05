

export const stackB = <T>(...elements: T[]) => [...elements];

export const push = <T>(a: T, stack: T[]) => stack.concat([a]);

export const pop = <T>(stack: T[]) => {
  const newStack = stack.slice(0);
  const item = newStack.pop();
  return [item, newStack];
}