const logger = (req,res,next)=>{
    req.userName = "divya",
    next();
}
export default logger