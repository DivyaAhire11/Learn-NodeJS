import { Schema , model} from "mongoose";

const empSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : Number,
        required : true
    }
})

const emp = model("employees", empSchema);
export default emp;