const User = require('../models/User');

module.exports = {
    'POST /api/register': async (ctx, next) => {
        console.error(ctx.request.body);
        console.error(Math.random());
        let User_data = await User.createTable.create({
            name: ctx.request.body.userName,
            passwd: ctx.request.body.pwd,
            email: (Math.random() * 1000).toString(),
            gender: 1
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
