const readline = require('readline-sync')

const movies = [
    {action: 12, kiss: 2, category:'A'}, //암살
    {action: 2, kiss: 14, category:'M'}, //어바웃 타임
    {action: 7, kiss: 2, category:'A'}, //토이스토리
    {action: 2, kiss: 10, category:'M'}, //노팅힐
    {action: 6, kiss: 15, category:'M'} //타이타닉
]
const actionCut = parseInt(readline.question("action?"))
const kissCut = parseInt(readline.question("kiss?"))
const target = {actionCut, kissCut}

movies.sort((a,b)=>{
    const disA = Math.sqrt(Math.pow(a.action-target.action,2)+Math.pow(a.kiss-target.kiss,2))
    const disB = Math.sqrt(Math.pow(b.action-target.action,2)+Math.pow(b.kiss-target.kiss,2))

    return disA-disB > 0 ? 1:-1
})
console.log(movies)

const knum = 3
const result = {actionCount:0, kissCount:0}

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    const str = result.actionCount > result.kissCount ? '액션':'멜로'

    console.log(str)

}