const path = require('path');
function getRoot(req, res) {
    // res.send('Hello from the server side!')
    // res.send('Hello from the server side!')

    
    res.sendFile(path.join(__dirname, '..', 'public', 'pic.png'));
}

module.exports = getRoot;