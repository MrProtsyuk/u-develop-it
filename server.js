const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CONNECT TO DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL user,
        user: 'root@localhost',
        //Your MYSQL pass,
        password: 'Homebrewed2003!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
