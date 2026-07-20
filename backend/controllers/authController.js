const db = require('../db/db');

// register but just checking if the db works!
const registerController = async (req, res) => {

    // getting user_id from req
    const {user_id} = req.body;

    // chekcing if empty user_id
    if (!user_id) {
        return res.status(400).json({'msg':'Bad Request: Missing user_id'});
    }

    // check if the user is in the db - query
    const querySyntax = 'SELECT * FROM users WHERE user_id = $1';
    const queryVariable = [user_id];
    let inDB = false;

    try {
        const result = await db.query(querySyntax, queryVariable);

        if (result.rowCount === 1) {
            inDB = true;
        }
        
    } catch (error) {
        console.log(error);
        
    }

    if (inDB) {
        return res.status(400).json({'msg':'user already in DB'});
    }

    // add the user to the db



    // return success
    res.status(200).json({'mgs':'all ok!'});
}

module.exports = {
    registerController
}