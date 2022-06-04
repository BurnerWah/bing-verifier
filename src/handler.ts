import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())

app.get('/BingSiteAuth.xml', async (ctx) => {
  const { host } = ctx.req.header()
  const bing_auth = await BING_SITE_AUTHS.get(host)
  if (bing_auth) {
    return ctx.body(
      `<?xml version="1.0"?>
      <users>
        <user>${bing_auth}</user>
      </users>`,
      200,
      {
        'Content-Type': 'text/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=31557600',
      },
    )
  }
})

export async function handleRequest(event: FetchEvent): Promise<Response> {
  return app.handleEvent(event)
}
