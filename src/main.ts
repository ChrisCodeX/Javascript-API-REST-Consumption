console.log("Hello My friend")

const API_URL = 'https://dog.ceo/api/breeds/image/random'

fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img')
        if (img != null) {
            img.src = data.message
        }
        //data.message
        console.log(data.message)
    })