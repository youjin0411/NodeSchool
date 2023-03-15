/*
	Javascript에서는 false로 처리되는 값들
	null, NaN, 0, 빈문자열('', "", ``), undefined, false
*/

// const a = 30;
// console.log(a); //30
// a = 10; // 에러. const는 값을 바꿀 수 없다. TypeError: Assignment to constant variable.


// 함수
// function add(n1, n2) {
//     return n1 + n2;
// }
// result = add(1, 2); // 3
// console.log(result); // 3

// plus = add; //plus도 add()의 역할을 할 수 있음
// result = plus(3, 4); // 7
// console.log(result); // 7

// sub = function(n1, n2) {
//         return n1 - n2;
//     } // 익명함수
// result = sub(3, 2); // 1
// console.log(result); // 1


sub = (n1, n2) => {
        return n1 - n2;
    } // 익명함수
result = sub(3, 2); // 1
console.log(result); // 1