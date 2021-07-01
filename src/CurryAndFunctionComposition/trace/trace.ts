export const trace = <T>(label: string) => (value: T) => {
  console.log(`${label} : ${value}`);
  return value;
}

