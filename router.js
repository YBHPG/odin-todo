import { Router } from "express";
import path from 'path';

export const router = Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/index.html');
})