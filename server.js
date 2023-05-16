// -------------------------------------VARIABLES & MODULES DECLARATION-------------------------------------
const express = require('express');

const app = express();
const port = 8000;

// friends array
const friends = [
    {
        id: 0,
        name: 'Abid'
    },
    {
        id: 1,
        name: 'newton'
    },
    {
        id: 2,
        name: 'einstein'
    },
]


// ------------------------------------------MIDDLEWARES-------------------------------------

// logging middleware here
app.use((req, res, next) => {
    // start time
    const start = Date.now;
    next();
    // actions of the middleware goes here
    const delta = Date.now - start;
    console.log(`${req.method} ${req.url} Time: ${delta}ms`)
    
})

// in order to use req in post method using express
// NOT needed for get methods
app.use(express.json());


// -----------------------------------------------GET-------------------------------------

app.get('/', (req, res)=>{
    // res.send('Hello from the server side!')
    res.send('hello from the server side!')
})

app.get('/friends', (req, res)=>{
    // send the full friends array as json
    res.json(friends);
})

// case for when we have a parameter passed in
app.get('/friends/:frid', (req,res)=>{
    // get the friend id from params object in req
    const fid = req.params.frid;
    // check to see if friend id is valid or not
    const friend = friends[fid];
    if (friend){
        // pass the friend corresponding to the id
        res.json(friend);
    }else{
        // pass the json 404 error
        res.status(404).json({
            error: 'No friend with the requested id exists. Please check again',
        });
    };
});

app.get('/msg', (req, res)=>{
    res.send(
        '<h1>People worth mentioning:</h1><li>Einstein</li>'
        )
})

// ---------------------------------------------POST-------------------------------------
// post request through express -> add a friend but make id automatic
app.post('/friends', (req, res)=>{
    // add validation to check if input is correct
    if (!req.body.name) {
        // add status 400 generic error code
        return res.status(400).json({
            error: 'Missing the name of the friend. Please enter name!',
        })
    };

    const newFriend = {
        id: friends.length,
        name: req.body.name,
    }
    friends.push(newFriend);
    res.json(newFriend);
})

app.post('/msg', (req, res)=>{
    console.log('updating message...')
})


// -------------------------------------SERVER LISTENING ON PORT-------------------------------------
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})