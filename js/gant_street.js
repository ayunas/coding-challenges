function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] != 1 && A[n - 1] != K)
        return false;
    else
        return true;
}

let A = [1,1,2,3,3]
console.log(solution(A,3))
A = [1,1,3];
console.log(solution(A,2))

A = [4,1,2,34,4];
console.log(solution(A,5))
A = [1,2,3,4,5];
console.log(solution(A,5))

