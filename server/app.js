const Koa = require('koa');

const cors = require('koa-cors');

const ws = require('ws');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const rest = require('./rest');

const Model = require('./model');

const app = new Koa();

var http = require('http').createServer(app.callback());

var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected'+socket)
    socket.broadcast.emit('hi');
    socket.on('test', function(msg){
        console.error(msg);
    })
});

app.use(cors());

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// static file support:
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
// app.use(templating('views', {
//     noCache: true,
//     watch: true
// }));

// bind .rest() for ctx:
app.use(rest.restify());

// add controllers:
app.use(controller());

// let server = app.listen(3000);
http.listen(3000, function(){
    console.log('listening on *:3000');
});
console.log('app started at port 3000...');


