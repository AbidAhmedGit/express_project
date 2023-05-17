const express = require('express');
const rootRouter = express.Router();
const getRoot = require('../controller/root.controller');

rootRouter.get('/', getRoot);

module.exports = rootRouter;
