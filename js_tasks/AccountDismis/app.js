// try{

let timeout = 5000

function resetTimer() {
  clearTimeout(timeout);
}

const logoutUser = () => setTimeout(() => {
  const account = document.querySelector('.account')
  account.innerText='Logout'
  console.log('logout')
}, timeout)

document.addEventListener('keypress', resetTimer)
document.addEventListener('mousemove', resetTimer)
logoutUser()
// console.log('working')
// }
// catch{
//   console.log('error')
// }