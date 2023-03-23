function A(input) {
    if (input != null && input != undefined) {
        console.log(input);
    }
}

function B(input) {
    if (input != null) { //""은 해당사항이 아님 
        console.log(input);
    }
}