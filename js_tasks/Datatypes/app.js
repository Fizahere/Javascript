//primitive type if we assign second variable a first variable then it will replace
//the value of second variable

let firstValue='fiza'
let secondValue='Fizza'
secondValue=firstValue
console.log(firstValue,'firstValue')
console.log(secondValue,'secondValue')

//referece data type array and object

let firstArr=[1001,'fiza',true]//it can hold values of different datatypes at same time
let secondArr=[1002,'Fizza',false]//spread operator remove reference
secondArr=firstArr
console.log(firstArr,'firstArr')
console.log(secondArr,'secondArr')