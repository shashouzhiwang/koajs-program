const db = require('../db');

let demo_excelModel = db.defineModel('demo_excel', {
    user_name: db.STRING(100),
    user_phone: db.STRING(100),
    user_sex: db.STRING(100),
    user_email: db.STRING(100)
});

let demo_excel = {
    createTable: demo_excelModel
};

module.exports = demo_excel;