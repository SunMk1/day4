const arr = []

function lotto(num){
    for (let i = 0; i < num; i++) {
        eventNum = parseInt((Math.random() * 45) + 1)
        console.log(eventNum)
        arr.indexOf(eventNum)==0? i--:arr.push(eventNum)
    }
    return arr
 }
console.log(lotto(20))

//indexOf 값 확인
// const check = [1]
// const test = check.indexOf(1)==0? check.push(5):check.push(8)
// console.log(test)
