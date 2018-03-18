const products = require('../products');
module.exports = {
    'GET /test': async (ctx, next) => {
        // ctx.render('index.html');
        // console.log('000000000000000');
        // ctx.response.body = 'index page';
        //
        // ctx.rest({
        //     products: products.getProducts()
        // });

        ctx.response.body = {
            products: products.getProducts()
        };
    }
};
