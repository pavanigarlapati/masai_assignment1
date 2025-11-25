// Q: Filter and Sort Data with Higher-Order Functions

function processStudents(students) {
  
  // 1. Filter students with marks > 60
  const filtered = students.filter(student => student.marks > 60);

  // 2. Sort in descending order of marks
  const sorted = filtered.sort((a, b) => b.marks - a.marks);

  // 3. Map to extract names
  const sortedNames = sorted.map(student => student.name);

  // 4. Return names
  return sortedNames;
}


// Example Input
const students = [
  { name: "Alice", marks: 58 },
  { name: "Bob", marks: 85 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 45 },
  { name: "Emma", marks: 76 },
  { name: "Frank", marks: 63 },
  { name: "Grace", marks: 89 },
  { name: "Hannah", marks: 95 },
  { name: "Ian", marks: 54 },
  { name: "Jack", marks: 79 },
  { name: "Kate", marks: 67 },
  { name: "Leo", marks: 88 },
  { name: "Mia", marks: 91 },
  { name: "Nathan", marks: 72 },
  { name: "Olivia", marks: 82 }
];


// Calling Function
console.log(processStudents(students));
