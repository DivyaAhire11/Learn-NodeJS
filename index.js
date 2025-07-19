import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express();
const PORT = 3000 || process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

const connectdb = async()=>{
     try {
     //    await mongoose.connect(``);
        console.log("DataBase is Connected");
     } catch (error) {
          console.log(error);
     }
}
app.get("/health",(req,res)=>{
     try {
          return res.json({
               data : [],
               message : "Server is running healthy"
          })
     } catch (error) {
          console.log(error)
     }
})
app.listen(PORT , ()=>{
     connectdb();
     console.log(`Port runs on server ${PORT}`);
})
