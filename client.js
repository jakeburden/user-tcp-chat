const net = require('net')
const client = net.connect(9090)

const username = process.argv[2]

process.stdin.on('data', data => client.write(`${username}> ${data}`))
client.on('data', data => process.stdout.write(data))

