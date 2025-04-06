//11.함수
// 유사한 코드들을 묶어서 이름을 붙여 함수의 이름을 불러 기능을 불러서 쓸 수 있도록해주는 문법
function getArea(width, height) { // 매개변수
    function another() {
        console.log("an");
    }

    another();
}

getArea();