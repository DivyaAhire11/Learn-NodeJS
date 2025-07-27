import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000 || process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//my controlers
import { healthControler } from "./controller/generalController.js";
import { signup, login } from "./controller/userSignUpController.js";
import connectdb from "./config/connectdb.js"


app.get("/health", healthControler);
app.post("/signUp", signup);
app.post("/login", login);

app.listen(PORT, () => {
     console.log(`Server run on port no : ${PORT}`);
     connectdb()
})