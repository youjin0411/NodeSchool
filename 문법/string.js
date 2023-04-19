const str = "Hello world";

console.log(str.length); // 11

// 문자열 쪼개기(본채 변화X)
console.log(str.slice(1, 5)); // ello : 인덱스 1부터 인덱스 5 전까지
console.log(str.slice(2)); // llo world : 인덱스 2부터 끝까지
console.log(str.slice(-2)); // ld : 뒤에서부터 2번째부터 끝까지

// 문자열 대체 
a = str.replace("world", "everyone"); // Hello everyone
console.log(a); // Hello world

console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world

// 문자열 포함여부
console.log(str.includes('world')); // true
console.log(str.includes('hello')); // false

console.log(str); // Hello world