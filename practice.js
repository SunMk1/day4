//입력한 숫자까지 출력
const readline = require('readline-sync')

const arr = [1,2,3,4,5,6,7,8,9,]

const pointNum = readline.question('What number?')

function num(point){
    for (let i = 0; i < pointNum ; i++) {
        console.log(arr[i])
    }
}
console.log(num(pointNum))

//가장 큰 수 뽑기

const array = [1,5,9,7,67,144,56,43]
let save = 0
for (let i = 0; i < array.length; i++) {
    save < array[i] ? save=array[i]:save=save
}
console.log(save)

//가장 작은 수 뽑기

const ar = [99,5,87,5,1,343,67,]
let sa = ar[0]
for (let i = 0; i < ar.length ; i++) {
    sa > ar[i] ? sa=ar[i]:sa=sa
}
console.log(sa)

