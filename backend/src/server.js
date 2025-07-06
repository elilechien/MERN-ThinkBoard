import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/ratelimiter.js"
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT

// middleware
app.use(cors());
app.use(express.json()); //this middleware will parse the JSON bodies
app.use(rateLimiter);

// Our simple custom middlewhere
app.use((req, res, next) => {
    console.log(`Req method is ${req.method} & req URL is ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on port", PORT);
    });     
});