//동등한연산자(abstract equility) 값만 비교 
console.log(1 == '1'); // true

// 일치연산자(strict equility) 자료형까지 비교
console.log(1 === '1') // false

console.log('hello' == 'hello'); //true
console.log('hello' === 'hello'); //true

console.log(0 == false); //true
console.log(0 === false); //false
console.log(0 === false) //false