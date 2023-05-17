const {getMsg, postMsg} = require('../controller/msg.controller');
const express = require('express');

const msgRouter = express.Router();

msgRouter.get('/', getMsg);
msgRouter.post('/', postMsg);

module.exports = msgRouter;

