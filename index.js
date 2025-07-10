import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ encoded: true }))

const TASK = []
app.get("/health", (req, res) => {
    res.json({
        data: [],
        message: "server running healthy"
    })
})
app.post("/addtask", (req, res) => {
    try {
        let {Taskname, TaskDescription} = req.body;
        if (!{Taskname, TaskDescription}) {
            res.json({
                data: [],
                message : "Data Not present"
            })
        }
        TASK.push({
             id: TASK.length+1,
             Taskname, 
             TaskDescription
        });
    } catch (error) {
        res.json({
           data: [],
            message: error.message
        })
    }
})
app.get("/gettask", (req, res) => {
    try {
        res.json({
            data: TASK,
            message: "message done"
        })
    } catch (error) {
        res.json({
           data: [],
            message: error.message
        })
    }
})

app.get("/gettask/:id", (req,res)=>{
      try {
        let {id} = req.params
        
        if(!id)
            res.json({
              data : null,
            message : "id is required"
        })
      let findTASK = TASK.filter((task)=>task.id == id)
      if(findTASK.length == 0){
            res.json({
                data : null,
                message : "task not found"
            })
      }else{
        res.json({
             data : findTASK,
             message :" Task found "
        })
      }
   
      } catch (error) {
          res.json({
            data : null,
            message : error.message
          })
      }
})
app.delete("/deleteTask/:id",(req,res)=>{
  try {
     let {id} = req.params
      if(!id){
         res.json({
              data : null,
             message : "id is required"
        })   
      }
     let IndexId= TASK.findIndex((task)=>task.id == id)
     if(!IndexId){
         res.json({
              data : null,
             message : "task not found"
        })   
      }
        let deletetask = TASK.splice(IndexId,1)

        return res.json({
             data : deletetask,
             message :" Task delete successfully "
        })
      

  } catch (error) {
      res.json({
        data : null,
        message : error.message
      })
  }

})
app.listen(PORT, () => {
    console.log(`server runs on port : ${PORT}`);
})