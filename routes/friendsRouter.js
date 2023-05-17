const { getFriends, getOneFriend, postFriend } = require('../controller/friends.controller');
const express = require('express');

const friendsRouter = express.Router();

// routers can be used as a middleware to perform some actions
friendsRouter.use((req, res, next) => {
    console.log('ip address- ', req.ip)
    next();
});

friendsRouter.get('/', getFriends);
// case for when we have a parameter passed in
friendsRouter.get('/:frid', getOneFriend);

// post request through express -> add a friend but make id automatic
friendsRouter.post('/', postFriend)

module.exports = friendsRouter;
