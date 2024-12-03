function findSimilars(array) {
    let duplicates = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                duplicates.push(array[i]);
            }
        }
    }
    console.log(duplicates, 'duplicates');  
}

// let array = [2,3,4,5,8,7,6,6,6,5,5,5,3]
// findSimilars(array)

//second method

// function findSimilars(array) {
//     let max = Math.max(...array); 
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === max) {
//             count++;
//         }
//     }

//     return count;
// }

function findMaxOccurrence(array) {
    let countMap = {};
    let maxCount = 0;
    let mostFrequentNum;

    for (let i = 0; i < array.length; i++) {
        // console.log(maxCount,'l')
        if (countMap[array[i]] === undefined) {
            countMap[array[i]] = 1;
        } else {
            countMap[array[i]]++;
        }
        if (countMap[array[i]] > maxCount) {
            maxCount = countMap[array[i]];
            mostFrequentNum = array[i];
        }
        
    }

    console.log(`Number with the maximum count is: ${mostFrequentNum} (Count: ${maxCount})`);
}

let array = [2, 3, 4, 5, 8, 7, 6, 6, 6, 5, 5, 5, 3];
findMaxOccurrence(array);
