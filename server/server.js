const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const { generateMessage, generateLocationMessage } = require("./utils/message");

const publicPath = path.join(__dirname, "../public");
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit(
    "newMessage",
    generateMessage("admin", "Welcome to the chat app")
  );

  socket.broadcast.emit(
    "newMessage",
    generateMessage("admin", "New user joined")
  );

  socket.on("disconnect", () => {
    console.log("Client disconnected from server");
  });

  socket.on("createMessage", (data, callback) => {
    console.log("Created message", data);
    io.emit("newMessage", generateMessage(data.from, data.text));
    callback("This is from the server");
    // socket.broadcast.emit("newMessage", {
    //   from: data.from,
    //   text: data.text,
    //   createdAt: new Date().getTime()
    // });
  });
  socket.on("createLocationMessage", coords => {
    io.emit(
      "newLocationMessage",
      generateLocationMessage("admin", coords.latitude, coords.longitude)
    );
  });
});

server.listen(port, () => {
  console.log("Server started!");
});
