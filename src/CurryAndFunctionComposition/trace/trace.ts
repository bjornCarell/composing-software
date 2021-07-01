export const trace = (label: string) => (value: unknown) => {
  console.log(`${label} : ${value}`);
  return value;
}

