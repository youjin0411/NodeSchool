const arr = ['apple', 'banana', 'cherry', 'apple'];

// data: 데이터, index: 데이터에 해당하는 index()
arr.forEach((data, index) => {
    // console.log(` ${index} : ${data}`);
});

//return 값이 true에 해당하는 index를 반환.
const cherryIndex = arr.findIndex((data) => {
    return data === 'cherry';
})
console.log(cherryIndex);