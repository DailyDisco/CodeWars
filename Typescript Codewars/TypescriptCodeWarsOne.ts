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
