import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

//Registering the public middlewares 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin : "*"
}));
app.use(helmet());

//Registering Routes


//Default GET endpoint
app.get('/',(req,res)=>{
    res.status(200).json({
        message : "Welcome to my Server"
    });
})

export default app;