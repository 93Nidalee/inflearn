// 간단한 문제 1: 변수 스코프 문제
// 이 함수는 1부터 5까지의 숫자를 1초 간격으로 출력하려고 합니다
function countWithDelay() {
    console.log("카운트 시작...");
    
    for (let i = 1; i <= 5; i++) {
      setTimeout(function() {  //비동기이기 때문에 루프가 돌고 난 후 적용
        console.log(i);
      }, i * 1000);
    }
    
/*
   for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function () {
      console.log(j); // <-- 이 부분이 클로저
    }, j * 1000);
  })(i);
}
클로저를 이용하여 이렇게도 작성 가능. -> 함수가 외부 스코프의 변수를 기억하고 사용하는 현상 (클로저)
*/ 
    console.log("카운트 함수 종료");
  }
  
  // 테스트
  countWithDelay();
  // 예상 출력:
  // "카운트 시작..."
  // "카운트 함수 종료"
  // 1 (1초 후)
  // 2 (2초 후)
  // 3 (3초 후)
  // 4 (4초 후)
  // 5 (5초 후)
  
  // 실제 출력:
  // "카운트 시작..."
  // "카운트 함수 종료"
  // 6 (1초 후)
  // 6 (2초 후)
  // 6 (3초 후)
  // 6 (4초 후)
  // 6 (5초 후)
  
  /*
  디버깅 과제:
  1. 왜 모든 setTimeout 콜백이 6을 출력하는지 이해하세요
  2. var 대신 다른것을 사용하여 문제를 해결해보세요
  3. 클로저를 사용한 다른 해결 방법도 시도해보세요
  */