import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://username:password@cluster0.nyex9ev.mongodb.net/techno?appName=Cluster0`)
        console.log(`Connected to MongoDB!`);
    } catch (error) {
        console.log("OH NO ERROR");
        console.log(error);
    }
}

export default connectDB

