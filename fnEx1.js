
function printNames(str1, str2 , str3) {
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

//printNames()                                     // 결과값 ; undefined  undefined    undefined
//printNames("AAA")                               //  결과값 ; AAA        undefined    undefined
//printNames("AAA","BBB")                         //  결과값 ; AAA          BBB        undefined
printNames("AAA","BBB","CCC")       //  결과값 ; AAA          BBB           CCC

//만일 결과값에서 값이 없을때 undefined 대신 111 222 333 의 값이 나오게 하고싶은 경우
//맨의 상단의 function printNames(str1, str2, str3) 을 function printNames(str1="111", str2="222", str3"333")
//라고 작성하면 printNames("AAA") 의  결과값 ; AAA   222  333  이 나온다. // 이를 기본값이라고 한다.
// 기본값을 이용하여 파라미터가 없으면 이를 채워준다.

// 함수를 파라미터로 생성할수있다.
// 예시) a, b 값은 숫자, fn(은 계산하는 함수라고 가정.. a+1 , b+1한 값을 지정하여 결과를 return한다고 할 경우)값은 함수인 경우,
function calc (a, b, fn){
    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a + 1, b + 1)

    return result
}
//화살표 함수 사용
console.log (calc(10 , 20 , (x,y) => x + y))  // 값 ; A:10    B:20      32

console.log (calc(10 , 20 , (x,y) => x - y))  // 값 ; A:10    B:20     -10

console.log (calc(6 , 7 , (x,y) => x * y))    // 값 ; A:6     B:7       56