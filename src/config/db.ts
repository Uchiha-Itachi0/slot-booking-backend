import mongoose from "mongoose"


const connectToDB = async (): Promise<void> => {
    try{
        console.log("Connecting to Database")
        await mongoose.connect(process.env.MONGODB_CONNECT_URI as string)
        console.log("Mongodb is connect!!")
    }
    catch (error: any){
        console.error("Failed to connect to db!!")
        console.error("This is the error", error);
        process.exit(1);
    }
}

export default connectToDB;