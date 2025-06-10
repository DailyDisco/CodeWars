// How many lightsabers do you own? 8 Kyu Typescript
export function howManyLightsabersDoYouOwn(name?: any): number {
  // So, how many?
  return name == 'Zach' ? 18 : 0;
}

// The question mark (?) after name attribute marks it as optional.

// Hello, Name or World! 8 Kyu Typescript
export function hello(name = ''): string {
  if (!name) {
    return 'Hello, World!';
  }

  let firstLetter = name.charAt(0).toUpperCase();
  let restOfLetters = name.slice(1).toLowerCase();
  let correctName = firstLetter + restOfLetters;

  return `Hello, ${correctName}!`;
}

// Price of Mangos 8 Kyu Typescript
export function mango(quantity: number, price: number): number {
  // P = number of mangos, price of mangos
  // R = Total Cost of Mangos
  // E = 2 mangos for 3 dollars each = 6
  // E2 = 3 mangos for 3 dollars each = 6 (every third mango is free)
  // P = To calculate the total cost:
  //     1. Divide quantity by 3 and floor it to get number of free mangos
  //     2. Subtract free mangos from total quantity to get paid mangos
  //     3. Multiply paid mangos by price to get final cost

  let finalQuantity = (quantity - Math.floor(quantity / 3)) * price;

  return finalQuantity;
}

// Type of Sum 8 Kyu Typescript
export function typeOfSum(a: any, b: any): string {
  let sum = a + b;

  return typeof sum;
}

// Twice as old 8 Kyu Typescript
export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  let yearsAgo = dadYearsOld - sonYearsOld * 2;

  return Math.abs(yearsAgo);
}

// Is Really NaN 8 Kyu Typescript
export function isReallyNaN(val: any): boolean {
  // return isNaN(val);  // wasn't working as planned :-(
  // use isNaN to check the val is NaN but also check the type to make sure
  return typeof val === 'number' && isNaN(val);
}

// Holiday VI - Shark Pontoon 8 Kyu Typescript
export function shark(
  pontoonDistance: number,
  sharkDistance: number,
  youSpeed: number,
  sharkSpeed: number,
  dolphin: boolean
): string {
  // P = sharkDistance, sharkSpeed, pontoonDistance, youSpeed, dolphin

  let finalSharkSpeed = sharkSpeed;

  if (dolphin) {
    finalSharkSpeed = sharkSpeed / 2;
  }

  if (sharkDistance / finalSharkSpeed >= pontoonDistance / youSpeed) {
    return 'Alive!';
  } else {
    return 'Shark Bait!';
  }
}

// Check same case 8 Kyu Typescript
export function sameCase(a: string, b: string): number {
  // P = two letters, a and b
  // R = Return -1 if either one of the characters is not a alphabetic letter
  // Return 1 if they're both the same case, return 0 if they are not
  // E: 'a' and 'g' returns 1
  // P: use regex to test for alphabetical letter, then check the upppercase or lowercase status of everything and compare it

  // regex check for alphabetical letter
  let isLetterTest = (char: string) => /^[A-Za-z]+$/.test(char);

  // check if it's a letter first

  if (!isLetterTest(a) || !isLetterTest(b)) {
    return -1;
  }

  // check if they are both the same case
  const bothUpper = a === a.toUpperCase() && b === b.toUpperCase();
  const bothLower = a === a.toLowerCase() && b === b.toLowerCase();

  return bothUpper || bothLower ? 1 : 0;
}

// Learning TypeScript. Basic Types 8 Kyu Typescript
export var var1Boolean: boolean = true;
export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 0b111111;
export var var5Octal: number = 0o744;

export var var6String: string = 'Hello, world!';

export var var7Array: (number | string | object)[] = [
  1,
  'test',
  { a: 3 },
  4,
  5,
];
export var var8NumericArray: Array<number> = [1, 2, 3, 4, 5];

export var var9Tuple: [string, number] = ['key', 12345];

export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

export var var10Enum: Color = Color.Blue;

export var var11ArrayOfAny: Array<any> = [1, 'test', { a: 3 }, 4, 5];

export function var12VoidFunction(): void {
  console.log('no return');
}

export var var13Null: null = null;
export var var14Undefined: undefined = undefined;

export function var15NeverFunction(): never {
  throw new Error('This will never return');
}
