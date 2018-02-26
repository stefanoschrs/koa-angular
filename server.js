const path = require('path')

const Koa = require('koa')
const koaSend = require('koa-send')

const port = process.env.PORT || 1337
const fePath = 'fe/dist'

const app = new Koa()

app.use(async (ctx) => {
  const sendOptions = {
    root: path.join(__dirname, fePath)
  }

  if (/\..*$/.test(ctx.path)) {
    return koaSend(ctx, ctx.path, sendOptions)
  }

  await koaSend(ctx, 'index.html', sendOptions)
})

app.listen(port)
