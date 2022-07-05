export interface Env {
  BING_SITE_AUTH: string
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    return new Response('Hello World!')
  },
}
