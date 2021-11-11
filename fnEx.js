//정해진 숫자만큼 출력하는 함수 만들기

function printNums(start, end) {

    for (let i = start; i <= end ; i++) {
        console.log(i)
    }

    return // "Hello" //내가 끝났으니까 원래 흐름대로 돌아가라는 의미므로 "Hello" 가 없어도 결과는 똑같다.
}

const result = printNums(1,10)
console.log(result) // (함수므로 결과는 꼭 있어야한다.) 결과값은 undefined 가나온다. 의미; 변수는 있지만 결과값은 Assign (어싸인) 된적이 없다.
                   // 상단에 return "Hello" 를 작성하면 결과값은 Hello 가 나온다.


//JS의 함수 ; 일급객체이다. 변수나 자료구조(객체,배열 등)에 저장할수있다. 다른 함수의 파라미터가 될수있다. 다른 함수의 return 값이 될수있다.
// 1. 함수는 무명의 리터럴로 생성할수있다.
// 2. 함수는 변수에 저장 할 수 있다.
// 3. 함수는 객체에 저장할 수 있다.
// 4. 함수의 매개변수에 전달 할 수 있다.
// 5. 함수의 반환 값으로 사용할수 있다.

