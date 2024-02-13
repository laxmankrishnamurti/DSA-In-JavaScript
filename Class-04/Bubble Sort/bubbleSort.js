const marks1 = [99, 56, 89, 85, 96, 74, 58];
// const marks2 = [78,77,69,59,58,36,49,85];

console.log(marks1);
for (let i = 0; i < marks1.length; i++) {
  for (let j = 0; j < marks1.length; j++) {
    if (marks1[j] > marks1[j + 1]) {
      let temp = marks1[j];
      marks1[j] = marks1[j + 1];
      marks1[j + 1] = temp;
      console.log(marks1);
    }
  }
}
console.log(marks1);

const marks3 = [99, 45, 85, 69, 52, 36, 26, 34, 87];
