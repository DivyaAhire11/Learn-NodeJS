import express from "express"
import cors from "cors"
import SONG_INFO from "./DB.js"

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

app.get("/songs" , (req,res)=>{
    try {
         res.json(SONG_INFO);
    } catch (error) {
        res.json({
            data : [],
            message : "data not found"
        })
    }
})
app.post("/addSong" , (req,res)=>{
       try {
           let data = req.body
           if(!data){
            res.json({
                data : null,
                message : error.message
            })
           }
           let NewSong = {  
                id : SONG_INFO.length + 1,
                data,
                message : "Song add successfully"
        }
           
        SONG_INFO.push(NewSong)

      
       } catch (error) {
            req.json({
                 data: [],
                message: error.message
            })
       }

})
app.delete("/deletesong/:id",(req,res)=>{
      try {
          let {id} = req.params
          if(!id){
               res.json({
                   data : [],
                   message : "id must be required"
               })
          }
              let FindSong= SONG_INFO.find((song)=>song.id == id)
          if(!FindSong){
            res.json({
                data : null,
                message : error.message
            })
          }
        let findIdx =  SONG_INFO.findIndex((song)=>song.id == id)
        if(findIdx == -1){
             return res.json({
                data : null,
                message : "not found"
             })
     }  
         let removeSong = SONG_INFO.splice(FindSong,1)
           return res.json({
                data : removeSong,
                message :" Song delete successfully "
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
