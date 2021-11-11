//test 시계 _(함수사용)  12시38분을 기준으로 시계의 내각 각도를 구하여라.


function calcTotal(hourValue, minValue){
//시침의 각도 구하는 함수  ->입력값 : 시(12) 과 출력 : 각도
    function calcHour(hour) {

        const result = (360 / 12) * (hour % 12)

        return result
    }

//분침의 각도 구하는 함수 ; 화살표 함수 사용
    const calcMin = min => (360/60) * min


//분침에 시침의 이동 각도를 구하는 함수
    function getExtra (min) {

        return ((360 / 12) / 60) * min

    }
     const result = Math.abs( (calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue) ) // 원래 계산하고자 했던 로직 => 변수(result)로 잡기

    return result > 180? 360 - result : result // 180도가 넘은 외각값이 나오므로 360- result 값을 반환해주어야한다.
    }


// console.log(calcTotal(12,38)) // 출력값 : -209가 나온다. 음수가 나오면 안되므로 상단의 result 절대값(Math.abs)처리.

console.log(calcTotal(12,38))