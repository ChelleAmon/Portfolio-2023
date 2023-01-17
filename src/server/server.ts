import express from "express";  
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const clientPath = path.join(__dirname, '/dist/client');


app.use(express.static(clientPath))
app.use(cors({
    credentials: true,
    origin: "*"
}))

const PORT = 3000; // temporary. Save it in the env file

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Congratulations! Server is running successfully.")
})


app.listen(PORT, () => {
    console.log(`Success! Starting localhost http://localhost:${PORT}`)

});

app.all("*", function (req, res) {
    const filePath = path.join(__dirname, '/dist/client/index.html');
    res.sendFile(filePath);
  });