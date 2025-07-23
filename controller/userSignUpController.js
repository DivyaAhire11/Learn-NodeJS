import { mergeConfig } from "axios";
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

        let createUser = await user.create({
            name,
            email,
            password: hashPassword
        })

        if (createUser) {

            createUser = await createUser.save();

            return res.json({
                message: "user create successfully",
                data: createUser
            })
        } else {
            return res.json({
                message: "something went wrong",
            })
        }
    } catch (error) {
        res.json({
            message: error.message

        })
    }
}
 const login = async(req,res)=>{
         try {
            let {email,password} = req.body
            let requiredfield = ["email","password"];
            requiredfield.forEach((field)=>{
                if(!req.body[field]){
                    return res.json({
                        message : `${field} is required`
                    })
                }
            })
           let checkUserExit = await user.findOne({email})
           if(!checkUserExit){
               res.json({
                        message : "email does not exit please signup"
                    })
           }
           let isPasswordMatch = await bcrypt.compare(password,checkUserExit?.password)
        //    console.log(isPasswordMatch); //true
          if(!isPasswordMatch){
               return res.json({
                message : "invalid credentials"
               })
           }else{
            return res.json({
                message : "login successfully",
                data : checkUserExit
            })
           }
        } catch (error) {
             res.json({
            message: error.message

        })
         }
 }
export { signup,login }