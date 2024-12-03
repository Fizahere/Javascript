//here is switch case statment
switch ('banana') {
    case 'mango':
        console.log('hello, this is mango.')
        break;
    case 'banana':
        console.log('hello, this is banana.')
        break;
    case 'apple':
        console.log('hello, this is apple.')
        break;
    default:
        console.log('😟 sorry, your basket is empty.')
}

//here is if else statment
function compareTriplets(a, b) {
    let aliceResult = 0;
    let bobResult = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceResult += 1;
        } else if (a[i] < b[i]) {
            bobResult += 1;
        }
    }

    return [aliceResult, bobResult];
}

const a= [10,5,4]
const b= [5,9,4]
console.log(compareTriplets(a,b))


fiza='fiza'
console.log(fiza)