//시침의 각도, 분침의 각도, 분침에 따라 이동한 시침의 각도, 각도의 차

//12 : 38
function calcTotal(hourValue,minValue){
    function calcHour(hour){
        const h = (360/12)*(hour%12)
        return h
    }
//화살표 함수
    const calcMin = min => (360/60) * min

    function getExtra(min){
        const extra = (360/12)/60*min
        return extra
    }
    const result = Math.abs((calcHour(hourValue)+getExtra(minValue))-calcMin(minValue))
    return result
}

console.log(calcTotal(12,38))
