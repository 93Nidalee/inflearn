//1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {} //객체 리터럴 -> 이게 더 간결해서 많이 씀

//2. 객체 프로퍼티 (객체 속성) 
let person = {
    //key : value
    name: "minju",
    age: "24",
    hobby: "테니스",
    job: "FE Developer",
    extra : {},
    10 : 20, //숫자나 문자열을 사용할 수 있다
    "like cat" : true, // 띄어쓰기가 포함된 경우 "" 로 묶어줘야한다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; //person 객체의 name 값이 name변수에 저장됨.
console.log(name); //타입스크립트에 관한 경고사항 취소선

let name2 = person.name2; //없는 키 값을 불러올 경우 
console.log(name2); //undefind라고 뜸 -> 오류는 안남

let age = person["age"]; // "문자열" 이런 방식으로 작성해야함 
console.log(age);

let property = "hobby";
let hobby = person[property]; // -> person객체의 hobby를 가져오게 됨.
console.log(hobby);

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer" //수정
person["favorite"] = "마라샹궈"; //추가

console.log(person);

//3.3 프로퍼티를 수정하는 방법 
person.job = "educator";
person["favorite"] = "강아지";

console.log(person);

//3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favorite"];
console.log(person);
// delete [space] 삭제하고 싶은 프로퍼티 -> 삭제가 이루어짐

//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); // name 프로퍼티가 person에 있으면 True를 반환
let result2 = "cat" in person;
console.log(result2);