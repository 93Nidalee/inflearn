//1. 배열 순회
let arr = [1, 2, 3];

//1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}
//배열 인덱스는 변수 i로 인덱스를 이용한 활동이 가능하지만 
// for of는 배열안의 값을 순회만 해줌

//1.2 for of 반복문 : 오직 배열을 순회하기위해 만들어진 반복문
for (let item of arr) {
    // console.log(item);
}

//2. 객체 순회
let person = {
    name: "kmj",
    age: 24,
    hobby: "테니스",
};

//2.1 Object.keys 사용
// -> 객체에서 키 값만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);

for (let key of keys) {
    // console.log(key, person[key]);
}

//2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);

for (let value of values) {
    console.log(value);
}

//2.3 for in 
// 객체만을 위한 반복문
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}