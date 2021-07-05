interface Stack<T> {
  push: (item: T) => Stack<T>;
  pop: () => (T[] | Stack<T>)[];
  toString?: () => string;
}

export const stackA = <T>(...items: T[]) => ({
  push: (item: T) => stackA(...items, item),
  pop: () => {
    const newItems = [...items];
    const item = newItems.splice(-1);
    return [item, stackA(...newItems)];
  },
  toString: () => `stack(${ items.join(',') })` || 'No stack'
});

export const push = <T>(item: T, stack: Stack<T>) => stack.push(item);
export const pop = <T>(stack: Stack<T>) => stack.pop();


