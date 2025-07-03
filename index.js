import express from "express"

const app = express();
const PORT =3000 || process.env.PORT
const OBJ = {
    msg : "WelCome! In Our Website"
}

app.get("/",(req,res)=>{
    res.json({OBJ});
})

app.listen(PORT ,()=>{
      console.log(`Server starts on the port ${PORT}`);
})