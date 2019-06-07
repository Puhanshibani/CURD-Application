const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is Required.'
    },
    email: {
        type: String,
        required: 'This field is Required.'
    },
    mobile: {
        type: String,
        required: 'This field is Required.'
    },
    city: {
        type: String,
        required: 'This field is Required.'
    }

});

mongoose.model('Employee', employeeSchema);