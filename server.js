// -----------------------------------------------Imports-------------------------------------
// import getMsg from './controller/msg.controller';

// -------------------------------------VARIABLES & MODULES DECLARATION-------------------------------------
const express = require('express');
const app = express();
const port = 8000;

// routers
const friendsRouter = require('./routes/friendsRouter');
const msgRouter = require('./routes/msgRouter');
const rootRouter = require('./routes/rootRouter')

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
// this basically does json.parse on the request string 
// and allows us to do json manipulation
// NOT needed for get methods
app.use(express.json());

// -------------------------------------Router calls-------------------------------------
app.use('/friends', friendsRouter);
app.use('/', rootRouter);
app.use('/msg', msgRouter)

// -------------------------------------SERVER LISTENING ON PORT-------------------------------------
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})