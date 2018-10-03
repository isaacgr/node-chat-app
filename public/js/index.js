const socket = io();
socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "isaac",
    text: "hi"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on("newMessage", function(data) {
  console.log("New message", data);
});
