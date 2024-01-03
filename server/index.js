import express from "express";
import http from "http";
import helmet from "helmet";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8000",
    credentials: true
  }
});

app.use(helmet());

app.get("/", (req, res) => {
  return res.status(200).json("hi");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(8000, () => {
  console.log(`app is running on port 8000`);
});
