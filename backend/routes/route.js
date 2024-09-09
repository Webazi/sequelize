import express from "express";
import { getChat, getChatById, RemChat, EditChat, PostChat, Login } from "../controllers/controller.js";

const router = express.Router();

router.get('/', getChat);
router.get('/chat:id', getChatById);
router.get('/remove:id', RemChat);
router.get('/edit:id', EditChat);
router.post('/post', PostChat);
router.post('/login', Login);
export default router;
