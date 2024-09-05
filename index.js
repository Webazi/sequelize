import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import router from './backend/routes/route.js';
import http from 'http';


const app = express();
const server = http.createServer(app);

const port = 6000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(router);


app.listen(port, () => console.log(`http://localhost:${port}`));
