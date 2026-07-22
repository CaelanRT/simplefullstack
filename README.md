## DB
The database is a PostgreSQL database that has two tables, users and sales. Users stores data about the user and sales is our super secret dashboard.

Once you have a database user set up, connect to the database with the following command: `psql -U caelanrt -d simplefullstack`

For your app to connect, you need to grant connect, select, insert, update, delete on your tables to a 2nd user (called demo_app) here for it to access your database.

To create the database, run the following command `psql -U caelanrt -d simplefullstack -f db/schema.sql`

To see the sales table, run the following command `psql -U caelanrt -d simplefullstack -f db/seed.sql`