const db = require('../db/db');
const {getAuth} = require('@clerk/express')

// register but just checking if the db works!
const registerController = async (req, res) => {

    // getting user_id from req
    const {user_id} = req.body;

    // chekcing if empty user_id
    if (!user_id) {
        return res.status(400).json({'msg':'Bad Request: Missing user_id'});
    }

    // check if the user is in the db - query
    const checkQuerySyntax = 'SELECT * FROM users WHERE user_id = $1';
    const queryVariable = [user_id];
    let inDB = false;

    try {
        const result = await db.query(checkQuerySyntax, queryVariable);

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
    const addQuerySyntax = 'INSERT INTO users (user_id) VALUES ($1)';

    try {
        const result = await db.query(addQuerySyntax, queryVariable);
        
    } catch (error) {
        console.log(error);
        
    }


    // return success
    res.status(200).json({'mgs':`User added with ID: ${user_id}`});
}

const protectedController = (req, res) => {

    const auth = getAuth(req);

    if(!auth.isAuthenticated) {
        return res.status(401).json({"msg":"user not authenticated"});
    }

    res.status(200).json({"msg":"got to protected"});
}

module.exports = {
    registerController,
    protectedController
}