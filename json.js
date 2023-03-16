const a = '{ "result": true, "count": 42 }';
console.log(a);

// 문자열을 JSON 객체로 변환
const obj = JSON.parse(a);
console.log(obj.count);
console.log(obj["result"]);

// JSON 객체를 문자열로 변환
b = JSON.stringify({ x: 5, y: 6 });
console.log(b);