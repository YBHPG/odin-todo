import express from "express";
import path from 'path';
import { router } from "./router.js";

const __dirname = path.resolve();
const address = '127.0.0.1';
const port = '3000';

const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use(router);
app.set('port', process.env.PORT || port);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')}`);
});