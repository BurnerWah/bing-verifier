import app from './app'

export interface Env {
  BING_SITE_AUTH: string
}

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return app.fetch(request, env, ctx)
  },
}
