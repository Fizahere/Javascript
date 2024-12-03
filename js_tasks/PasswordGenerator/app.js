
//sign up
let email = document.getElementById('Email')
let password = document.getElementById('Password')
let button = document.getElementById('button')
let emailError = document.getElementById('emailError')
let passError = document.getElementById('passError')
let nameError = document.getElementById('nameError')
let userNameError = document.getElementById('userNameError')
let Name = document.getElementById('Name')
let UserName = document.getElementById('UserName')
let error = document.getElementById('error')

const genrateuserName = () => {
    if (!Name.value) {
        nameError.innerText = 'please fill name!'
        nameError.style = 'color:red'
        return
    }
    let digits = '0123456789'
    let randomUserName = ''
    for (let i = 0; i < 5; i++) {
        randomUserName += digits[Math.floor(Math.random() * 10)]
    }
    UserName.value = Name.value + randomUserName
}
const genratePassword = () => {
    let digits = 'aQ1b2Rc3Sd4Te5Uf6Vg7Wh8Xi9Yj0ZkAlBmCnDoEpFqGrHsItJuKvLwMxNyOzP'
    let randomPassword = ''
    for (let i = 0; i < 9; i++) {
        randomPassword += digits[Math.floor(Math.random() * 10)]
    }
    password.value = randomPassword
}

Name.addEventListener('input', () => {
    if (!Name.value) {
        nameError.innerText = 'please fill name!'
        nameError.style = 'color:red'
    }
    else {
        nameError.innerText = ''
    }
})

UserName.addEventListener('input', () => {
    if (!UserName.value) {
        userNameError.innerText = 'please fill username!'
        userNameError.style = 'color:red'
    }
    else {
        userNameError.innerText = ''
    }
})

email.addEventListener('input', () => {
    if (!email.value) {
        emailError.innerText = 'please fill email!'
        emailError.style = 'color:red'
    }
    else {
        emailError.innerText = ''
    }
})

password.addEventListener('input', () => {
    if (!password.value) {
        passError.innerText = 'please fill password!'
        passError.style = 'color:red'
    }
    else {
        passError.innerText = ''
    }
})

const submitForm = () => {
    if (Name.value && UserName.value && email.value && password.value) {
        // document.write('Account created successfully...')
        let user = []
        user.push(Name.value)
        user.push(email.value)
        user.push(password.value)
        localStorage.setItem('user', JSON.stringify([...user]))

        window.location.href = 'login.html'
    }
    else {
        error.innerText = 'some fields are empty!'
        error.style = 'color:red'
    }
}

//login
let loginEmail = document.getElementById('LoginEmail').value
let loginPassword = document.getElementById('LoginPassword').value
let loginError = document.getElementById('loginError')

const submitLoginForm = () => {
    if (!loginEmail && !loginPassword) {
        loginError.innerText = 'something went wrong!'
        loginError.style = 'color:red'
    }
    else {
        document.write('login success..')
    }
}