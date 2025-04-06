//배열이란 여러개의 값을 순차적으로 담는 자료 형 
//1. 배열 생성 
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 

let arrC = [
    1,
    true,
    "hello",
    undefined,
    null,
    () => { },
    {},
    [],
];
// 배열 안에는 어떤 타입의 값이든 자유롭게 넣을 수 있음, 길이 한계 X

//2. 배열 요소 접근 
let item1 = arrC[0]
let item2 = arrC[1]

arrC[0] = "hello";
console.log(arrC);
// 특정 원소의 값을 수정하는 것도 가능함. 