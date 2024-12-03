// let array = [3, 5, 9,1, 2, 8, 32, 3]
// const sortedArray = array.sort((a, b) => {
//     return a - b
// })

// let sortedArr = array.sort()
// console.log(sortedArr,'array')
// console.log(sortedArray)                                         

const products = [
    {
      id: 1,
      name: "Product One",
      price: 100,
    },
    {
      id: 2,
      name: "Product Two",
      price: 200,
    },
    {
      id: 3,
      name: "Product Three",
      price: 300,
    },
    {
      id: 4,
      name: "Product Four", 
      price: 400,    
    },
  ];
  
let productNewArray;

//filter return an array
productNewArray = products.filter((singleProduct) => {
   return singleProduct.id !== 4
  });
  
  //array find (return one object or value)
  productNewArray = products.find((singleProduct) => {
   return singleProduct.id === 4
  });
  