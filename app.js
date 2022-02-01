const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server,{
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')  
})

io.on('connection', (socket) => {
    console.log('a user connected');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})