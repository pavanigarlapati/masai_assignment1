// Q: Grouping and Summing with reduce()

function countCategories(categories) {
  
  // 1. Use reduce() to count occurrences
  const counts = categories.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return counts;
}


// EXTRA CHALLENGE:
// Sort categories based on count (descending)
function getSortedCategories(categories) {
  const counts = countCategories(categories);

  const sorted = Object.entries(counts)                
    .sort((a, b) => b[1] - a[1])                      
    .map(entry => entry[0]);                          

  return sorted;
}


// Example Input
const data = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

console.log(countCategories(data));
// { electronics: 2, clothing: 2, toys: 3 }

console.log(getSortedCategories(data));
// [ "toys", "electronics", "clothing" ]
