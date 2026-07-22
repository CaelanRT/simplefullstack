const db = require('../db/db');
const {getAuth} = require('@clerk/express')
const { verifyWebhook } = require('@clerk/express/webhooks');

// register but just checking if the db works!
const registerController = async (req, res) => {


    try {
        const evt = await verifyWebhook(req);

        const {id} = evt.data;

        // console.log(evt.data.email_addresses[0].email_address);

        const email = evt.data.email_addresses[0].email_address;
        
        const eventType = evt.type;

        console.log(`Webhook received with ID: ${id} and event type of ${eventType}`);
        console.log(evt.data);

        const insert = 'INSERT INTO users (id, email) VALUES ($1, $2)';
        const values = [id, email];

        const result = await db.query(insert, values);

        res.send('Webhook received!');
        
        
    } catch (error) {
        console.error('Error: ', error);
        res.status(400).send('Webhook Error');
    }
}

const protectedController = async (req, res) => {

    // const auth = getAuth(req);

    // if(!auth.isAuthenticated) {
    //     return res.status(401).json({"msg":"user not authenticated"});
    // }

    const dashboardQuery = 'SELECT * FROM sales';

    let result = {};

    try {
        result = await db.query(dashboardQuery);
    } catch (error) {
        console.log(error);
        
    }

    res.status(200).json(result.rows);
}

module.exports = {
    registerController,
    protectedController
}