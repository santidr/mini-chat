class Sockets {
    constructor(io) {
        this.io = io
        this.socketEvents()
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('Client connected! - ', socket.id)
        
            socket.emit('msg-welcome', {
                msg: 'Welcome to the chat server!',
                date: new Date(),
            })
        
            socket.on('message-to-server', (data) => {
                this.io.emit('message-from-server', data)
            })
            
            // socket.on('msg-client', (data) => {
            //     console.log(data)
            // })
        })
    }
}

module.exports = Sockets