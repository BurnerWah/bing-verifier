import { Hono } from 'hono'

const app = new Hono()

app.get('/BingSiteAuth.xml', (ctx) => {
  return ctx.body(
    `<?xml version="1.0"?>
    <users>
      <user>${ctx.env.BING_SITE_AUTH}</user>
    </users>`.replace(/^\s+/gm, ''),
    200,
    {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31557600',
    },
  )
})

export default app
