import user from "../models/user.js";
import bcrypt from "bcrypt"

const signup = async (req, res) => {
    try {
        let { name, email, password } = req.body

        let requiredData = ["name", "email", "password"];

        requiredData.forEach((data) => {
            if (!(req.body[data])) {
                res.json({
                    message: `${data} is required`
                })
            }
        })

        let alreadyExituser = await user.findOne({ email: email });

          if(alreadyExituser){
            return res.json({
                message : "email already exit please login"
            })
          }
       
         let hashPassword = await bcrypt.hash(password,10)
         console.log(hashPassword);
    
        } catch (error) {
        res.json({

        })
    }
}

export { signup }