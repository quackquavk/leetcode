/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let circularCount = students.filter((student) => student === 0).length;
  let squareCount = students.length - circularCount;

  let idx = 0;
  while (idx < sandwiches.length && circularCount > 0 && squareCount > 0) {
    if (students[0] === sandwiches[idx]) {
      if (students[0] === 0) {
        circularCount--;
      } else {
        squareCount--;
      }
      students.shift();
      idx = 0; // Reset idx because the queue has changed
    } else {
      idx++;
    }
  }

  return circularCount + squareCount;
};
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
