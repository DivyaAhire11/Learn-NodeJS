import { config } from "dotenv"
config()

const connectdb = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("dataBase Connected");

    } catch (error) {
        console.log(error)
    }
}

export default connectdb 