const fruits = ['apple', 'banana', 'orange', 'pear'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//콜백 함수를 사용함. 
fruits.forEach(function(f) {
    console.log(f);
})


const fruitsName = ['사과', '바나나', '오렌지'];

for (let i = 0; i < fruitsName.length; i++) {
    console.log(fruitsName[i]);
}
fruitsName.forEach(function(f) {
    console.log(f);
})