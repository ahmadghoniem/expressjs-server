import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Choo Choo! Welcome to your Express app 🚅$on port ${port} AND ${process.env.MYAPI_KEY}`);
})

app.get("/json", (req, res) => {
    res.json({"Choo Choo": "Welcome to your Express app 🚅"});
})

console.log(port);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})