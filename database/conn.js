// import mongoose from "mongoose";

// export default async function connect(){
//     await mongoose.connect(process.env.ATLAS_URI)
//     console.log(err);
//     //await mongoose.connect("mongodb+srv://adityavishal903:aditya8076@cluster0.rxze5ev.mongodb.net/")
//     console.log("Database Connected")
// }

// conn.js
import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}