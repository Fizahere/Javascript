let datacontainer = document.getElementById('data')

let dataFromJson;

fetch('../../Api/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
    .catch((error) => console.error(error))

