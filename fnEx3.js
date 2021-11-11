//배열을 주면 max 값을 찾아내는 함수 만들기

function getMaxInArray(arr){
   let al = arr.length
    maxnum = arr[al-1]
    while (al--){
       if(arr[al] > maxnum){
           maxnum = arr[al]
       }
    }
    return maxnum
}

const arr = [4, 5, 80, 70, 5]
const mm = getMaxInArray(arr)
console.log(mm)

