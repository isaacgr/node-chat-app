const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const publicPath = path.join(__dirname, "../public");
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "admin",
    text: "Welcome to the chat app",
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit("newMessage", {
    from: "admin",
    text: "New user joined",
    createdAt: new Date().getTime()
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected from server");
  });

  socket.on("createMessage", data => {
    console.log("Created message", data);
    // io.emit("newMessage", {
    //   from: data.from,
    //   text: data.text,
    //   createdAt: new Date().getTime()
    // });
    // socket.broadcast.emit("newMessage", {
    //   from: data.from,
    //   text: data.text,
    //   createdAt: new Date().getTime()
    // });
  });
});

server.listen(port, () => {
  console.log("Server started!");
});
