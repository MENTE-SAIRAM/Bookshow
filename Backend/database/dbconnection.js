import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: "./config.env" });
const url=process.env.MONGO_URL ||3000;
const dbconnection=()=>{
    mongoose.connect(url,{
        dbname: "Full_Stack_Project"
    }).then(()=>{
        console.log("connected to database")
    }).catch(err=>{
        console.log(`${err}`)
    })

}
export default dbconnection;