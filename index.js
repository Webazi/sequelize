import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import router from "./backend/routes/route.js"
const port = 6000
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(router);

app.listen(port,()=> console.log(`http://localhost:${port}`))