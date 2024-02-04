const roll = (base, setRes, skill, prev, setPrev) => {
    let fum = false, crit = false
    const result = Math.floor(Math.random()*20) + 1
    const baza = Number(base)
    if (result === 1){
        fum = true
    }
    else if (result === 20){
        crit = true
    }
    const res = {result, baza, fum, crit, skill}
    setRes(res)

    const myArr = prev
    myArr.unshift(res)
    setPrev(myArr)
    console.log(myArr)
}

export default roll