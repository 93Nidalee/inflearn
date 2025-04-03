//1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// ?? : var1, var2 중에 undefined 값이 아닌 것을 찾아냄
let var5 = var1 ?? var3;
// 20으로 저장 
let var6 = var2 ?? var3;
// 둘다 undefined가 아니므로 그냥 첫번째 값이 지정됨.

let userName = "이정환";
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;
// 실무에서 사용할때 : 보여지는 이름 - defined 되어있는 것으로 지정

//2. type of 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자 

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1);

//3. 삼항 연산자
// -> 항을 3개 사용하는 연산자 
// -> 조건식을 이용해서 참, 거짓일때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
//            --1 조건식--  -2 참- -3 거짓-
console.log(res);