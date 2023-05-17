// -----------------------------------------------Imports-------------------------------------
// import getMsg from './controller/msg.controller';

// -------------------------------------VARIABLES & MODULES DECLARATION-------------------------------------
const express = require('express');
const { getFriends, getOneFriend, postFriend } = require('./controller/friends.controller');
const {getMsg, postMsg} = require('./controller/msg.controller');
const getRoot = require('./controller/root.controller');

const app = express();
const port = 8000;


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


// ------------------------------------GET: call controllers------------------------------------------

app.get('/', getRoot);

app.get('/friends', getFriends);

// case for when we have a parameter passed in
app.get('/friends/:frid', getOneFriend);

app.get('/msg', getMsg);

// ------------------------------------POST: call controllers------------------------------------------
// post request through express -> add a friend but make id automatic
app.post('/friends', postFriend)

app.post('/msg', postMsg)


// -------------------------------------SERVER LISTENING ON PORT-------------------------------------
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})