//test 시계 _(함수사용)  12시38분을 기준으로 시계의 내각 각도를 구하여라.


//함수를 가지도록 만듦 _ 밑에 있는 함수들을 아래에 다 넣기.
//function calcTotal(hourValue, minValue){

//}

//시침의 각도 구하는 함수  ->입력값 : 시(12) 과 출력 : 각도
function calcHour(hour){

    const result = (360 / 12 ) * (hour % 12)   // (360/12) * hour을 하면 360도 즉 (30*0 =>) 0이나온다. (360 / 12 ) * (hour % 12) 작성 //로직으로 처리
    //현재 코드에는 지역변수가 2가지(result , hour) 존재한다. // 함수가 끝나고나면 지역변수는 사라진다.

    return result // return 끝났다는 의미   // result 를 남기고 사라지도록만든다.

}
//분침의 각도 구하는 함수
// 함수형 컴포넌트 _변수로 처리하는 것.
//const calcMin = (min) => {}  //원래는 이처럼 작성하나 아래와 같이 ()생략가능
//const calcMin = min => {
//   return (360/60) * min
// }
// 화살표 함수 사용
const calcMin = min => {
    return(360/60) * min
}   //이처럼 사용하여도 결과값은 위와 같다.


//분침에 시침의 이동 각도를 구하는 함수   (*** 분침이 이동하면 시침도 조금씩 이동한다.)
function getExtra (min){

    return ((360 / 12) / 60) * min   //

}

console.log(calcHour(12))
console.log(calcMin(38))