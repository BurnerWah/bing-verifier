import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())

app.get('/BingSiteAuth.xml', (ctx) =>
  ctx.body(
    `<?xml version="1.0"?>
    <users>
      <user>${BING_SITE_AUTH}</user>
    </users>`.replace(/^\s+/gm, ''),
    200,
    {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31557600',
    },
  ),
)

export default app
