import express from "express"

const app = express();
const PORT =3000 || process.env.PORT

const TASK = [{
  task_name : "wakeup at 5 AM",
  task_description : "Follow EveryDay"
}
]

app.get("/",(req,res)=>{
    res.json({"message" : "welCome"});
})
app.get("/getTask",(req,res)=>{
  try {
     res.json({ data : TASK,
        msg : "Have a Nice Day"
     })
  } catch (error) {
    res.json({
        data : [],
        msg : "error"
    })
  }
    
})

app.listen(PORT ,()=>{
      console.log(`Server starts on the port ${PORT}`);
})