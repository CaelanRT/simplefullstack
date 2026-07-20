const db = require('../db/db');
// const {clerkClient, getAuth} = require('@clerk/express');

// register but just checking if the db works!
const registerController = (req, res) => {
    
    //const {user_id} = req.body;

    // if (!user_id) {
    //     res.status(400).json({'msg':'Bad Request: Missing user_id'});
    // }

    res.status(200).json({'mgs':'all ok!'});
}

module.exports = {
    registerController
}