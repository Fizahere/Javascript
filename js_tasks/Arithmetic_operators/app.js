const calculateTotalCost = (mealCost, tipPercent, taxPercent) => {
    let tip = mealCost / 100 * tipPercent
    let tax = taxPercent / 100 * mealCost
    let totalCost = mealCost + tip + tax
    console.log(Math.round(totalCost))
}
calculateTotalCost(12.00,20,8)

console.log([1,2]+[3,4])


