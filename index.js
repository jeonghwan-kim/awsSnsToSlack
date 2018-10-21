const https = require('https')
const channel = process.env.SLACK_CHANNEL
const webhookPath = process.env.SLACK_WEBHOOK_PATH
const icon_emoji = process.env.ICON_EMOJI || ':robot_face:'
const username = process.env.USERNAME || 'AWS'
const errorKeywords = process.env.ERROR_KEYWORDS || 'Unsuccessful command, to Degraded, Failed'

const validateEnvVars = _ => {
  const tag = '[ENVIRONMENT VARIABLE ERROR]'
  if (!webhookPath) throw Error(`${tag} SLACK_WEBHOOK_PATH is required`)
  if (!channel) throw Error(`${tag} SLACK_CHANNEL is required`)
}

const highlightMessage = msg => {
  const sentences = msg.split('.')
  sentences[0] = `*${sentences[0]}*`
  return sentences.join('.')
}

const parseEvent = event => {
  try {
    const { Message } = event.Records[0].Sns

    const parts = Message.split('\n')
    const data = {}
    parts.forEach(part => {
      part = part.trim()
      if (!part) return
      if (!part.includes(':')) return
      let [key, value] = part.split(':')
      key = key.trim()
      value = value.trim()
      if (!key || !value) return
      data[key] = value
    })
    return data
  } catch (e) {
    return null
  }
}

const isErrorMessage = msg => {
  const keywords = errorKeywords.split(',')
  return keywords.some(k => {
    k = k.trim()
    if (!k) return false
    return msg.includes(k)
  })
}

const buildAttachments = event => {
  const evtMap = parseEvent(event)
  if (!evtMap) return ''

  const { Message, Environment } = evtMap

  const color = isErrorMessage(Message) ? 'danger' : 'good'
  return [
    {
      author_name: Environment,
      text: highlightMessage(Message),
      color
    }
  ]
}
exports.buildAttachments = buildAttachments

exports.handler = event => {
  validateEnvVars()

  const postData = JSON.stringify({
    channel,
    icon_emoji,
    username,
    attachments: buildAttachments(event)
  })

  const options = {
    port: 443,
    method: 'POST',
    hostname: 'hooks.slack.com',
    path: webhookPath,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  }

  const req = https.request(options, res => {
    res.on('data', d => process.stdout.write(d))
  })
  req.on('error', e => console.error(e))
  req.write(postData)
  req.end()
}
