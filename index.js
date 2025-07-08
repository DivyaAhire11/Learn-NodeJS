import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ encoded: true }))

const TASK = [
    {
        Taskname: "hello",
        TaskDescription: "stay happy daily"
    }
]
app.get("/health", (req, res) => {
    res.json({
        data: [],
        message: "server running healthy"
    })
})
app.post("/addtask", (req, res) => {
    try {
        let data = req.body;
        if (!data) {
            res.json({
                data: [],
                message : "Data Not present"
            })
        }
        TASK.push(data);
    } catch (error) {
        res.json({
            data: [],
            message: "something went wrong"
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


app.listen(PORT, () => {
    console.log(`server runs on port : ${PORT}`);
})