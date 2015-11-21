const net = require('net')

const clients = []

const server = net.createServer(connection => {
  connection.on('data', data => {
    clients.forEach(client => {
      if (client !== connection) {
        client.write(data)
      }
    })
  })

  connection.on('end', () => {
    clients.splice(clients.indexOf(connection), 1)
  })

  clients.push(connection)
})

server.listen(9090)
