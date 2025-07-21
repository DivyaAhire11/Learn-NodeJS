
const healthControler = (req,res)=>{
    res.json({
        message : "server is running Healthy"
    })
}

const signup = (req,res)=>{
     try {
       let {name , email , password} = req.body

    //    let requiredData = [name,email,password];

     } catch (error) {
        console.log(error)
     }
}

export {healthControler,signup}