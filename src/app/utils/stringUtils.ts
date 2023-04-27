export function toKebabCase(str: string): string {
  return str.replaceAll(' ', '-').toLowerCase();
}
