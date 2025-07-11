import express from "express"
import cors from "cors"
import SONG_INFO from "./DB.js"

const app = express()
const PORT = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ encoded: true }))

const TASK = []


app.get("/songs", (req, res) => {
    try {
        res.json(SONG_INFO);
    } catch (error) {
        res.json({
            data: [],
            message: "data not found"
        })
    }
})
app.post("/addSong", (req, res) => {
    try {
        let { name, song_url, poster } = req.body
        if (!name || !song_url || !poster) {
            res.json({
                data: null,
                message: error.message
            })
        }
        let NewSong = {
            id: SONG_INFO.length + 2,
            name,
            poster,
            song_url,
            like: false,
            comment: []
        }

        SONG_INFO.push(NewSong)


    } catch (error) {

        res.json({
            data: [],
            message: error.message
        })
    }

})
app.post("/addComment/:id", (req, res) => {
    try {
        let { comment } = req.body;
        let { id } = req.params

        if (!id) {
            res.json({
                data: null,
                message: "id is required"
            })
        }
        if (!comment) {
            res.json({
                data: null,
                message: "comment is required"
            })
        }

        let foundSong = SONG_INFO.find((song) => song.id == id);
        if (!foundSong) {
            res.json({
                data: [],
                message: `Song Not Found For Id ${id}`
            })
        }
       foundSong?.comment.unshift({
           "name" : "user",
           comment
       })

    } catch (error) {

    }
})
app.delete("/deletesong/:id", (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            res.json({
                data: [],
                message: "id must be required"
            })
        }
        let FindSong = SONG_INFO.find((song) => song.id == id)
        if (!FindSong == -1) {
            res.json({
                data: null,
                message: error.message
            })
        }
        let removeSong = SONG_INFO.splice(FindSong, 1)
        return res.json({
            data: removeSong,
            message: " Song delete successfully "
        })

    } catch (error) {
        res.json({
            data: null,
            message: error.message
        })
    }
})

app.get("/health", (req, res) => {
    res.json({
        data: [],
        message: "server running healthy"
    })
})

app.listen(PORT, () => {
    console.log(`server runs on port : ${PORT}`);
})
