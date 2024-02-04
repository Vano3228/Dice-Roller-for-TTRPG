const counter = ({cubsNum, cubValue},setRes, res) =>{
    let result = 0
    let final_text = `${cubsNum}d${cubValue} = `
    let gen = 0
    if (cubsNum <=0) {
        throw 'Количество кубиков должно быть больше 0'
    }
    if (cubValue <= 1){
        throw 'Количество граней у кубика должно быть больше 1'
    }
    for (let i = 1 ; i < cubsNum ; i++){
        gen = Math.floor(Math.random() * cubValue) + 1
        result += gen
        final_text += `${gen} + `
    }

    gen = Math.floor(Math.random() * cubValue) + 1
    result += gen
    if (Number(cubsNum) === 1) {
        final_text += `${gen}`
    }
    else{
        final_text += `${gen} = ${result}`
    }


    const myArr = res.arr
    myArr.unshift(final_text)
    setRes({arr:myArr, len:myArr.length})

}

export default counter