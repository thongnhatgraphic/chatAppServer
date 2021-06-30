const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
})

// const { addUser, removeUser, getUser, getUsersInRoom} = require("./users")

io.on("connection", socket => {
    console.log("connection made successfully");
    socket.on("message", payload => {
        console.log("message receive on server:",payload);
        io.emit("message", payload)
    })
    // socket.on("join", ({ user, room }, callback) => {
    //     console.log(user, room);
    // })
})

server.listen(8000, () => {
    console.log("list port 8000");
})
