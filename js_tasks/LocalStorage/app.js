alert('running')


const saveText = () => {
    let text = document.getElementById('text').value
    localStorage.setItem('text', JSON.stringify(text))
}

let getText = JSON.parse(localStorage.getItem('text'))
console.log(getText, 'text')