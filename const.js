// block 범위의 상수 
const number = 42; //상수 선언 
// 상수를 사용하는 이유는 실수로 값을 변경하는 것을 방지하기 위해서이다. 두번째는 보완적인 이유로, 상수는 블록 범위를 가지기 때문에 블록 밖에서는 사용할 수 없다.
try {
    number = 99; //수정 시도 
} catch (err) {
    console.log(err);
    //TypeError: Assignment to constant variable.
}
console.log(number);
//expected output: 42