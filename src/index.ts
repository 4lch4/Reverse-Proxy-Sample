import { printRoutes } from '@4lch4/koa-router-printer'
import { logger } from '@4lch4/logger'
import Koa from 'koa'
import KBody from 'koa-body'
import Helmet from 'koa-helmet'
import { getRoutes } from './routes'

const app = new Koa()
app.use(Helmet())
app.use(KBody())

for (const route of getRoutes()) {
  app.use(route.routes())
  app.use(route.allowedMethods)
}

printRoutes(app)

app.listen(8080, () => {
  logger.success('Reverse-Proxy-Sample has come online, listening on port 8080!')
})
