function countOnes(matrix) {

    return matrix.flat().filter(x => x === 1).length;

}

//Create a function to count the number of 1s in a 2D array.
/*
countOnes([
  [1, 0],
  [0, 0]
]) ➞ 1

countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]) ➞ 7
*/
