import server from './http'

const asyncJson = async (str) => {
  return JSON.parse(str)
}

/* istanbul ignore next */
export default function fnToHttp (fn) {
  const s = server((req, res) => requestHandler(fn, req, res))
  return s.listen(process.env.PORT)
}

export async function requestHandler (fn, req, res) {
  const body = await server.text(req)
  const json = await asyncJson(body).catch(() => null)
  return fn(json || body, {
    req, res,
  })
}
