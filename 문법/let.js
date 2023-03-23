function varTest() {
    var v = 1;
    if (true) {
        var v = 2;
        console.log(v); // 2
    }
    console.log(v); // 2
}

function letTest() {
    let l = 1;
    if (true) {
        let l = 2;
        console.log(l); // 2
    }
    console.log(l); // 1
}

const number = 42;
try {
    number = 99;
} catch (err) {
    console.log(err);
    //TypeError: Assignment to constant variable.
}
console.log(number);
//expected output: 42

const cathy = {
    "name": 'Cathy',
    "age ": 19,
    "skills": ["자바스크립트", "파이썬", "코볼"]
};
//{name: "Cathy", age: 19, skills: ["자바스크립트", "파이썬", "코볼"]}
console.log(cathy);
//Cathy
console.log(cathy.name);
console.log(cathy["name"]);

cathy.city = "Seoul";
//{name: "Cathy", age: 19, skills: ["자바스크립트", "파이썬", "코볼"], city: "Seoul"}	
console.log(cathy);
delete cathy.city;
//{name: "Cathy", age: 19, skills: ["자바스크립트", "파이썬", "코볼"]}
console.log(cathy);