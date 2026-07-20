const db = require('../db/db');

// register but just checking if the db works!
const registerController = async (req, res) => {

    // getting user_id from req
    const {user_id} = req.body;

    // chekcing if empty user_id
    if (!user_id) {
        return res.status(400).json({'msg':'Bad Request: Missing user_id'});
    }

    const querySyntax = 'SELECT * FROM users WHERE user_id = $1';
    let inDB = false;

    try {
        const {row} = await db.query(querySyntax, user_id);

        console.log(row);

        if (row) {
            inDB = true;
        }
        
    } catch (error) {
        console.log(error);
        
    }

    if (inDB) {
        return res.status(400).json({'msg':'user already in DB'});
    }

    res.status(200).json({'mgs':'all ok!'});
}

module.exports = {
    registerController
}