//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

//이렇게 선언하기 귀찮음

let [one, two, three, four] = arr;
console.log(one, two, three, four);
//할당이 되지 않은 변수를 사용하게 되면 undefined가 저장되어 있음

//2. 객체의 구조 분해 할당
let person = {
    name: "김민주",
    age: 24,
    hobby: "테니스",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;
// -> 원래는 이렇게 할당해준다. 근데 불편함

let { name,
    age: myAge,
    hobby,
    extra = "hello", } = person;
// 각각 객체의 프로퍼티를 키 값을 통해 저장할 수 있다. 
console.log(name, myAge, hobby, extra);
// 배열의 구조 분해 할당과 다르게 객체에서는 {중괄호}를 이용해 할당해주게 된다.
// 배열의 구조 분해 할당과 같이 키 값을 통해 지정해줄때 변수에 값을 지정해줄 수 있다. 
// myAge와 같이 키 값과 같이 받지 않고 이름을 달리하여 변수의 할당을 받을 수 있다. 

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
}

func(person)