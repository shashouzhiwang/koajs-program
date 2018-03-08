const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>hello,Koa2</h1>";

});
app.use(async (ctx, next) => {
    console.log("00000"); // 打印URL
    // await next(); // 调用下一个middleware
});
app.listen(3000);
console.log("app started at port 3000...");
