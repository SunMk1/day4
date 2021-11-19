//펑션 정리

function printNames(str1,str2 = "111",str3 = "222"){
    console.log(str1)
    console.log(str2)
    console.log(str3)
}
// printNames()
// printNames("AAA")
// printNames("AA","BB","CC")
printNames("AAA","BBB","CCC")

//펑션 계산
function calc(a,b,fn){
    console.log(`A:${a}`)
    console.log(`B:${b}`)

    const result = fn(a,b)
    return result
}
console.log(calc(10,20,(x,y)=>x+y))