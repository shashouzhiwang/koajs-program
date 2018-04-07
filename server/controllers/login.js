const Demo_excel = require('../models/Demo_excel');

module.exports = {
    'GET /api/login': async (ctx, next) => {
        let demo_excel_data = await Demo_excel.createTable.create({
            user_name: "CCCCC",
            user_phone: "1233",
            user_sex: "1",
            user_email: Math.random(4)
        }).then(result => {
            ctx.rest({
                status:true,
                msg:'注册成功'
            })
        }).catch(err => {
            console.log(`注册失败${err}`);
        });
        // ctx.rest(demo_excel_data);
    }
};
