let output = document.getElementById('output')
let input = prompt('enter the number')
        let result = input;
         while (result !== 1) {
            if (result % 2 === 0) {
                console.log("even");
                result / 2
            }
            else if (result % 2 != 0) {
                console.log("odd");
                result * 3 + 1
            }
            output.innerText=result
         }