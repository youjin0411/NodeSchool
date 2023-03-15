/*
	Javascript에서는 false로 처리되는 값들
	null, NaN, 0, 빈문자열('', "", ``), undefined, false
*/

const a = 30;
console.log(a); //30
a = 10; // 에러. const는 값을 바꿀 수 없다. TypeError: Assignment to constant variable.