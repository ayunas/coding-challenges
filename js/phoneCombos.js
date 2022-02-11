/*
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/
function phoneCombos(digits) {
    const dialpad = {1 : "", 2 : "abc", 3 : "def", 4 : "ghi", 5 : "jkl", 6 : "mno", 7 : "pqrs", 8 : "tuv", 9 : "wxyz"}
    
    const firstDigit = digits[0];
    const secondDigit = digits[1];
    const thirdDigit = digits[2];

    const mappedFirst = dialpad[firstDigit];
    const mappedSecond = dialpad[secondDigit];
    const mappedThird = dialpad[thirdDigit];
    const comboArr = [];
    console.log(mappedFirst,mappedSecond,mappedThird);
    
    if(!mappedFirst) return [];
    
    if(!mappedSecond) {
        for(let i=0; i < mappedFirst.length; i++) {
            comboArr.push(mappedFirst[i]);
        }
        return comboArr;
    }
    
    if(!mappedThird) {
        for(let i=0; i < mappedFirst.length; i++) {
            for(let j=0; j < mappedSecond.length; j++) {
            comboArr.push(mappedFirst[i]+mappedSecond[j])
        }
    }
    console.log(comboArr);
    return comboArr;
        
    for(let i=0; i < mappedFirst.length; i++) {
        for(let j=0; j < mappedSecond.length; j++) {
            for(let k=0; k < mappedThird.length; k++) {
                comboArr.push(mappedFirst[i]+mappedSecond[j]+mappedThird[k]);
            }
        }
    }
    console.log(comboArr);
    return comboArr;    
    }
};
}

phoneCombos("23");

