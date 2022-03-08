const sliceSum = (arr,n) => arr.slice(0,n).reduce((acc,num) => acc + num, 0)

/*
sliceSum([9, 8, 7, 6], 3) ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
*/
