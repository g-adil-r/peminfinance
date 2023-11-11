const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    datetime: {
        type: Date
    },
    day_duration: {
        type: Number
    },
    cost: {
        type: Number
    }
})

module.exports = mongoose.model('maintenance', maintenanceSchema);