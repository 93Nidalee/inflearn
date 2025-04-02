//1.scope란? -> 변수나 함수에 접근할 수 있는 범위
// 전역 스코프 / 지역 스코프 
// 전역 스코프 : 전체 영역에서 접근이 가능하다
// 지역 스코프 : 특정 영역에서만 접근이 가능하다

let a = 1; // 전역 스코프

function funcA() {
    let b =2 ; // 지역스코프
    console.log(a);
}

funcA();
if(true){
    let c = 1;
}

console.log(c);