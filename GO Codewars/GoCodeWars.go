// Simple multiplication (8 Kyu)

package kata

func SimpleMultiplication(n int) int {
  
  if n % 2 == 0 {
    return n * 8
  }
  
  return n * 9 // your code here
}

// Is he gonna survive? (8 Kyu)

func Hero(bullets, dragons int) bool {
  // your code
  
  // P = int bullets, int dragons
  // R = true if enough bullets, false if not enough bullets
  // E = 10 Bullets, 5 dragons = true, 9 bullets, 5 dragons = false
  // P = multiply number of dragons by 2 and check if it's greater than the bullets
  
  if (bullets >= dragons * 2 ) {
    return true
  } else {
    return false
  }
}
