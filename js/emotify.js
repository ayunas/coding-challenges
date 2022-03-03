function emotify(str) {
	let [first, mid, last] = str.split(" ");
	
	const emotify = {
		"smile": ":D",
		"grin": ":)",
		"sad": ":(",
		"mad": ":P"
	}
	
	return `Make me ${emotify[last]}`;
}

/*
word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P
Examples
emotify("Make me smile") ➞ "Make me :D"

emotify("Make me grin") ➞ "Make me :)"

emotify("Make me sad") ➞ "Make me :("
*/


