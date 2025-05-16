import mongose from "mongoose";

export const dbConnect=()=>{
    try{
        mongose.connect(process.env.DB_URL);
        console.log("Database has been connected successfully");
    }catch(reeor){
        console.log(error);
    }
}