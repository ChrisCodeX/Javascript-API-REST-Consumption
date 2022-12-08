console.log("Hello My friend")

const API_URL = 'https://dog.ceo/api/breeds/image/random'

fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        //data.message
        console.log(data.message)
    })