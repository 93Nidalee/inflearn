// 1. Spread 연산자 
// Spread -> 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

//[4,1,2,3,5,6]을 만들고 싶을 때

//객체 불러올 때도 가능 
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3)
}

funcA(...arr1);
//2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수 
// 한번에 모든 매개변수를 받아올 수 있음 

//매개변수를 선언하는 소괄호 안에서 쓰였기 때문에 spread연산자가 아니고 Rest매개변수 
function funcB(one, ...rest) {
    console.log(rest);
} // one에는 첫번째 매개변수가 저장되고 자동적으로 나머지는 Rest 매개변수에 저장하게 됨.

funcB(...arr1); // -> 여기서 들어온 모든 매개변수를 배열에 저장함 : Rest