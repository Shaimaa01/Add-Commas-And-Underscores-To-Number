function addCommasAndUnderscore(num) {
  // Covert To String
  let result = num.toLocaleString();
  // Covert To Array
  result = result.split("");
  // Update The Last Comma Value
  result[result.length - 4] = "_";
  // Convert To String
  result = result.join("")
  return result;
}

console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
