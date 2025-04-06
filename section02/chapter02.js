function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}


function returnFalsy() {
    console.log("Falsy");
    return undefined;
}

function returnTruthy() {
    console.log("Truthy");
    return 10;
}

console.log(returnTruthy() || returnFalsy());

function printName(person) {
    console.log(person && person.name);
}

printName();