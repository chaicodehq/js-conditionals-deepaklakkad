/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let basePrice;
  
  switch (size) {
    case "small": 
      basePrice = 3.00; 
      break;
    case "medium": 
      basePrice = 4.00; 
      break;
    case "large": 
      basePrice = 5.00; 
      break;
    default: return -1; // Invalid size
  }

  let typePrice;
  switch (type) {
    case "regular": 
      typePrice = 0.00; 
      break;
    case "latte": 
      typePrice = 1.00; 
      break;
    case "cappuccino": 
      typePrice = 1.50; 
      break;
    case "mocha": 
      typePrice = 2.00; 
      break;
    default: return -1; // Invalid type
  }

  let extrasPrice = 0;
  
  if (extras.whippedCream) extrasPrice += 0.50;
  if (extras.extraShot) extrasPrice += 0.75;

  return parseFloat((basePrice + typePrice + extrasPrice).toFixed(2));
}
