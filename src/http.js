import micro, {
  json, text, send, buffer,
} from 'micro'

micro.json = json
micro.text = text
micro.send = send
micro.buffer = buffer

export default micro
