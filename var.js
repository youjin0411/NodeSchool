function varTest() {
    var v = 1;
    if (true) {
        var v = 2;
        console.log(v);
    }
    console.log(v);
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}