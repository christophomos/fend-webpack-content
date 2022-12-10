var path = require('path')
const express = require('express')

const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081;

const app = express()

app.use(express.static('dist'))

const formData = {
    key: process.env.API_KEY,
    txt: "Soy americano."
}

const requestOptions = {
  method: 'POST',
  body: JSON.stringify(formData),
  redirect: 'follow'
};

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname + '/..' });
})

app.post('/language', (req, res) => {
    // formData.text = req.body
    console.log("Attempt post to meaningcloud")
    const response = fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log('error', error));
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})

app.get('/test', function (req, res) {    
    res.send(mockAPIResponse)
})