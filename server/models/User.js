const db = require('../db');

let userModel = db.defineModel('user', {
    email: {
        type: db.STRING(100),
        unique: true
    },
    passwd: db.STRING(100),
    name: db.STRING(100),
    gender: db.BOOLEAN
});

let user = {
    createTable: userModel
};

module.exports = user;