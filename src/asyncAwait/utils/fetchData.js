let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const HTTP_DONE = 4
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === HTTP_DONE) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error: ' + url_api))
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData