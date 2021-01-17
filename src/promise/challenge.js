const fetchData = require('./utils/fetchData.js')
const fethData = require('./utils/fetchData.js')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
.then(data => {
    console.log(data.info.count)
    return fethData(`${API}${data.results[0].id}`)
})
.then(data => {
    console.log (data.name) 
    return fethData(data.origin.url)
})
.then(data => {
    console.log(data.dimension)
})
.catch(error => console.error(error))