function getMsg(req, res){
    res.send(
        '<h1>People worth mentioning:</h1><li>Einstein</li>'
        )
}

function postMsg(req, res){
    res.send('<h1>updating message....</h1>')
    console.log('updating message...')
};

module.exports = {
    getMsg,
    postMsg,
};