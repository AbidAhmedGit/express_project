const friends = require("../models/friends");


function getFriends (req, res) {
    // send the full friends array as json
    res.json(friends);
}

function getOneFriend (req,res) {
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
};

function postFriend (req, res) {
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
};

module.exports = {
    getFriends,
    getOneFriend,
    postFriend,
}