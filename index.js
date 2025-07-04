import express from "express"

const app = express();
const PORT =3000 || process.env.PORT

const TASK = [{
  task_name : "Wake Up at 4 AM",
  task_description : "Follow EveryDay"
},
{
  task_name : "Meditation",
  task_description : "Train Your Brain With Good Habbit"
}
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/health",(req,res)=>{
   res.send("Server become Healthy Now Thanks...")
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
app.post("/addTask",(req,res)=>{
   try {
       console.log(req);
      
   } catch (error) {
    
   }
})

app.listen(PORT ,()=>{
      console.log(`Server starts on the port ${PORT}`);
})