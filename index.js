import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`Choo Choo! Welcome to your Express app 🚅$on port ${port} AND ${process.env.MY_ONE_AND_ONLY_APIKEY} I GOT INJECTED ${process.env.INJECTME_RAILWAY}`);
})

app.get("/json", (req, res) => {
    res.json({"Choo Choo": "Welcome to your Express app 🚅"});
})

console.log(port);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})