import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import router from './backend/routes/route.js';
import http from 'http';
import { Server as socketIO } from 'socket.io'; // Ganti ini

const app = express();
const server = http.createServer(app);
const io = new socketIO(server); // Ganti ini

const port = 6000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(router);

io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Handle events
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Additional socket event handlers
});

server.listen(port, () => console.log(`http://localhost:${port}`));
