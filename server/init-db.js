require('babel-core/register')({
    presets: ['stage-3']
});

const model = require('./model.js');
model.sync();


// const fs = require('fs');
// const db = require('./db');
//
// let files = fs.readdirSync(__dirname + '/models');
//
// let js_files = files.filter((f)=>{
//     return f.endsWith('.js');
// }, files);
//
// module.exports = {};
//
// for (let f of js_files) {
//     console.log(`import model from file ${f}...`);
//     let name = f.substring(0, f.length - 3);
//     // module.exports[name] = require(__dirname + '/models/' + f);
//     let test = require(__dirname + '/models/' + f);
//     console.log(test);
//     test.sync({force: true});
// }

console.log('init db ok.');
process.exit(0);