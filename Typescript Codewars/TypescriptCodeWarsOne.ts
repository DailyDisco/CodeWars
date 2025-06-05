// How many lightsabers do you own? 8 Kyu Typescript
export function howManyLightsabersDoYouOwn(name?: any): number {
  // So, how many?
  return name == 'Zach' ? 18 : 0;
}

// The question mark (?) after name attribute marks it as optional.

// 8 Kyu Hello, Name or World!
export function hello(name = ''): string {
  if (!name) {
    return 'Hello, World!';
  }

  let firstLetter = name.charAt(0).toUpperCase();
  let restOfLetters = name.slice(1).toLowerCase();
  let correctName = firstLetter + restOfLetters;

  return `Hello, ${correctName}!`;
}
