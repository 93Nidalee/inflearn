//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //Big integer - 잘 사용은 안함

if (!f1) {
    console.log("falsy")
}
//위의 값들은 Falsy한 값이기 때문에 !f1하면 정상 출력 됨. 

//2. Truthy 한 값
// -> 위의 Falsy한 값을 제외하면 모두 Truthy한 값임.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

if (t4) {
    console.log("Truthy");
}

// 3. 활용할 수 있는 방법
function printName(person) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name: "김민주" };
printName(person);
