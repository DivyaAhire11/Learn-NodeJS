import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000

app.get("/health" ,(req,res) => {
    try {
         res.json({
            data : [],
            message : "Server is running Healthy",
            success : true
         })
    } catch (error) {
         res.json({
            data : null,
            message : error.message,
            success : false
         })
    }
})
app.listen(PORT,()=>{
     console.log(`server runs on the port ${PORT}`);
})
