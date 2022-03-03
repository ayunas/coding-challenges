//grab the 5 highest values in the array and sum them up
function maxTotal(nums) {
    const maxes = nums.sort((x,y) => y - x).slice(0,5); //sort array in descending order then grab the 1st 5 elements by slicing
	return maxes.reduce((s,n) => s + n);
}