let numberOne = 0
let numberTwo = 1
let outputDivElement = document.getElementById('output')

for (let i = 0; i <= 100; i++) {
    let numberThree = numberOne + numberTwo
    numberOne = numberTwo
    numberTwo = numberThree
    // console.log(numberOne)
    // console.log(numberTwo)
//    outputDivElement.innerText+=
//    console.log(numberThree)
}

function add(firstNum,secondNum)
{
    return Math.round(firstNum+secondNum)
}

console.log(add(37,78))
//numthree = 0+1
// 0 = 1
