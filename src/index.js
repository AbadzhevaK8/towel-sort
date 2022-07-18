
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {return [];}
  let resArr = [];
  for (i = 0; i <= (matrix.length - 1); i++) {
      if ((i % 2) === 0) {
          for (j = 0; j < matrix[i].length; j++) {
              resArr.push(matrix[i][j]);
          }
      } else {
          for (j = (matrix[i].length - 1); j >= 0; j--) {
              resArr.push(matrix[i][j]);
          }
      }
  }
  return resArr;
}
