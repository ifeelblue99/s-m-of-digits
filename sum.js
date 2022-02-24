/*
sum of digits
*/


a = [25, 2, 3, 57, 38, 41]

function solution(n) {
    return parseInt(`${n}`[0], 10) + parseInt(`${n}`[1], 10)
}

//driver code
console.log(solution(35));
