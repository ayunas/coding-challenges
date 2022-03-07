function indexShuffle(str) {

    const evens = [...str].filter((s,i) => i % 2 === 0);
	const odds = [...str].filter((s,i) => i % 2);

	return [...evens, ...odds].join('');
}

/*
Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
Examples
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"

*/