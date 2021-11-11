//Test 도넛 _(함수사용)

function getArea(redius){
    const area = Math.pow(redius,2) * Math.PI
    return area
}

function getTotal(r1, r2){

    return Math.abs(getArea(r1) - getArea(r2))
}
getTotal(10,20)

console.log(getTotal(10,20))