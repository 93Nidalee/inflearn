//1. 상수 객체 
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

//다른 객체를 생성해서 할당하는 것은 오류남.
animal = {a: 1};
//..추가, 수정, 삭제는 가능하다
 animal.age = 2; //새로운 프로퍼티 추가
 animal.name = "cat" // 수정 
 delete animal.color; // 삭제

 console.log(animal);

 //2. 메서드 
 // -> 값이 함수인 프로퍼티를 말함

 const person = {
    name: "김민주",
    //메서드 선언
    sayHi: function () {
        console.log("안녕");
    },
 };

person.sayHi(); //메서도 호출 
person["sayHi"]();