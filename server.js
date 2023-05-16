const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res)=>{
    // res.send('Hello from the server side!')
    res.send({
        id: 1,
        name: 'Abid'
    })
})
app.get('/msg', (req, res)=>{
    res.send(
        '<h1>People worth mentioning:</h1><li>Einstein</li>'
        )
})
app.post('/msg', (req, res)=>{
    console.log('updating message...')
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})