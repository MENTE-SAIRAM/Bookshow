import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyparser from "body-parser"
import movieRoutes from './routes/movieRoutes.js'
import dbconnection from "./database/dbconnection.js"
dotenv.config({ path: "./config.env" });
const app=express()
const port=process.env.Port ||3000;
app.use(bodyparser.json());
app.use(cors());

dbconnection();
app.use('/api', movieRoutes);

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})