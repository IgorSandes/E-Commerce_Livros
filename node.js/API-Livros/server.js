// import http from "http";
import "dotenv/config"
import app from "./src/app.js";
import cors from "cors";

const PORT = 3000;

app.use(cors())
app.listen(PORT, () => {
    console.log("Servidor escutando!");
});