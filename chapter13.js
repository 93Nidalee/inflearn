//1. 콜백함수
function main(value){
    value(); //인자를 불러오면 함수를 호출할 수 있음 -> 콜백함수수
}

main(function sub() {
    console.log("i am sub");
}); //main의 인자를 함수로 줌 -> 선언문 자체를 안으로 넣어 표현식으로도 가능능

//함수의 인자를 다른 함수로 주는 것,
// 해당 함수에서 알아서 호출하도록 설정한 sub같은 함수 -> 콜백 함수

main( () => {
    // console.log("i am sub");
});
//함수표현식에서는 위와 같이 익명함수로 써도 된다.

//2. 콜백함수의 활용
function repeat(count, callback){ 
    for(let idx=1; idx <= count; idx++){
        callback(idx);
    }
}
// 중복코드를 계속 작성하는 것은 좋지 않음. -> 콜백함수 사용 (비슷한 형태의 함수여러개 X)

repeat(5, (idx) => {
    console.log(idx);
});

//repeatDouble
repeat(5, function (idx){
    console.log(idx * 2)
});

//repeatTriple
repeat(5, function(idx){
    console.log(idx*3)
});
