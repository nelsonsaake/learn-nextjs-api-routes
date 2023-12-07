export default function toCamelCase(input: string): string {
  return input.replace(/[_\s]([a-z])/g, (_, letter) => letter.toUpperCase());
}
