import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.post("/signup", async(req, res) => {
     try {
          let { userName, password } = req.body         
          if (!userName) {
               res.json({
                    data: [],
                    message: "user name is required",
                    success  : false
               })
          }
           if (!password) {
               res.json({
                    data: [],
                    message: "password is required",
                    success  : false
               })
          }
          let res = await bcrypt.hash(password,10)
             console.log(res)
             
     } catch (error) {
               res.json({
                    data: null,
                    message: error.message,
                    success  : false
               })
     }
})

app.get("/health", (req, res) => {
     try {
          res.json({
               data: [],
               message: "Server is running Healthy",
               success: true
          })
     } catch (error) {
          res.json({
               data: null,
               message: error.message,
               success: false
          })
     }
})
app.listen(PORT, () => {
     console.log(`server runs on the port ${PORT}`);
})
