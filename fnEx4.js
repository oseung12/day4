//배열을 주면 min 값을 찾아내는 함수 만들기

function getMinOunArray (arr) {
  var al = arr.length
    minnum = arr[al -1]
    while (al--){
      if(arr[al] < minnum){
          minnum = arr[al]
      }
    }
    return minnum
}

const number = [5, 6, 10, 30, 45]
const m = getMinOunArray(number)

console.log(m)