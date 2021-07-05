export const stringify = (value: unknown): string => Array.isArray(value) ? 
`[${value.map(stringify).join(',')}]` :
`{ value }`