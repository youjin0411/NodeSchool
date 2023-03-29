// null : 존재하지 않거나 유효하지 않은 object 
//				의도적으로 비어있음을 표현할 때 사용 

//undefined : 값이 명시되지 않은 변수 	
let foo;
console.log(foo); //undefined

let obj = {};
console.log(obj.prop); //undefined

// 위에 두 변수는 선언을 하였으나, 이번에는 선언 안 했다. 
console.log(bar); //에러 발생, 선언 자체를 해 주지 않았기 때문에 error가 발생함.

let bar = null;
console.log(bar); //null

console.log(typeof null); //object
console.log(typeof undefined); //undefined

console.log(null == undefined); //true
console.log(null === undefined); //false

//출력 시 null이 나오는 것들	
//1. 객체가 없을 때
let temp = null;
let string = ''
console.log(typeof temp); //object