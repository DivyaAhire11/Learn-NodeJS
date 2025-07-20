import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const password = process.env.MY_PASSWORD

const connectdb = async () => {
    try {

        await mongoose.connect(`mongodb+srv://DivyaAhire:${password}@cluster0.vtyi9tf.mongodb.net/MERN-1`)
        console.log("DataBase is Connected");
  
    } catch (error) {
        console.log(error);
    }
}

export default connectdb;