//1. 함수 표현식 
function funA() {
    // console.log("aa");
}

let varA = funA;
// console.log(varA);
//console에 funA내용이 나옴 -> 코드.

varA();
// 이렇게 하면 funA가 호출됨

let varB = function funcB() {
    // console.log("funcB");
}; // 함수를 선언함과 동시에 변수에 담을 수도 있음.

let varC = function () {
    // console.log("funcB");
}; // 함수이름이 없는경우 익명함수라고 함. 

//2. 화살표 함수
let varD = () => {
    // console.log("funcd");
};

//function 자리에 화살표  
let varE = () => 1;

let varG = (value) => {
    console.log(value);
    return value + 1;
};