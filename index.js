require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const db = mongoose.connection;
const app = express();

const bookRoutes = require('./routes/book.route');
const maintenanceRoute = require('./routes/maintenance.route');

mongoose.connect(process.env.MONGO_URI);

db.on('error', (error) => {
    console.log(error);
});

db.once('connected', () => {
    console.log('Mongo connected');
})

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API Finance'
    })
})

app.use(require('body-parser').json());
app.use('/books', bookRoutes);
app.use('/maintenance', maintenanceRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

