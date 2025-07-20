import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000 || process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//my function
import connectdb from "./config/connectdb.js";
import emp from "./models/emp.model.js";

app.get("/signup", async(req, res) => {
     try {
         const createEmp = await emp.create({
               name: "Purva",
               email: "purva1234@gamil.com",
               password: 1111
          })

          let savedEmp = await createEmp.save();
          return res.json({
               data : savedEmp
          })

     } catch (error) {
          console.log(error)
     }
})
   

app.get("/health", (req, res) => {
     return res.json({
          status: "Server is running healthy"
     })
})

app.listen(PORT, () => {
     console.log(`Port runs on server ${PORT}`);
     connectdb();
})
