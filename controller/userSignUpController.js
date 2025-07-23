import user from "../models/user.js";
import bcrypt from "bcrypt"

const signup = async (req, res) => {
    try {
        let { name, email, password } = req.body

        let requiredData = ["name", "email", "password"];

        requiredData.forEach((data) => {   // check all data is Entered
            if (!req.body[data]) {
                res.json({
                    message: `${data} is required`
                })
            }
        })

        //if user has been already exits then
        let alreadyExituser = await user.findOne({ email });

        if (alreadyExituser) {
            return res.json({
                message: "email already exit please login"
            })
        }

        // if user not already exits then
        let hashPassword = await bcrypt.hash(password, 10);

        let createUser =await user.create({
            name,
            email,
            password: hashPassword  
        })
      
       if(createUser){
           
            createUser = await createUser.save();
            
            return res.json({
                message : "user create successfully",
                data : createUser
            })
       }else{
         return res.json({
                message : "something went wrong",
            })
       }
    } catch (error) {
        res.json({
            message: error.message
           
        })
    }
}

export { signup }