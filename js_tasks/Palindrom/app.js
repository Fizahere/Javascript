

const palindromString=(string)=>{
    let revString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        revString += string[i]
    }
    return (string == revString) ? true : false
}

// let string = 'wow'
const string = prompt('enter any string to find if it is palindrom or not...')
console.log(palindromString(string))
//  palindromString(string)


