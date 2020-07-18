const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const proxy=require('koa2-proxy-middleware');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const os=require('os');
const index = require('./routes/index')



// error handler
// onerror(app)
// app.use(cors())
// const proxyOptions={
//   targets:{
//     '/business/(.*)':{
//       target:'http://10.40.80.50:11180',
//       changeOrigin:true
//     },
//     '/storage/(.*)':{
//       target:'http://10.40.80.50:7320',
//       changeOrigin:true
//     },
//     '/face/(.*)':{
//       target:'http://10.40.80.50:11180',
//       changeOrigin:true
//     },
//   }
// }
// app.use(proxy(proxyOptions))

// middlewares
app.use(koaBody({multipart:true}));
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// // routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const myHost = getIPAdress();
console.log('地址为：http://'+myHost+':9191');
app.listen(9191);
module.exports = app
