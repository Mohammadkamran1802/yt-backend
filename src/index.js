import dotenv from "dotenv";
dotenv.config();          // ✅ sabse pehle

import connectDB from "./db/db.js";

connectDB();









// const app = express();
// (async ()=>{
//      try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error",error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
        
        
//     }
// })()