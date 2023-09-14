import mongoose from 'mongoose';
const url = "mongodb+srv://haneenkodamy:123123321@e-commerce.8fq6zle.mongodb.net/shopnexa";//haninkodamy is the password of database on atlas and codepact is the new of the database 
const connectdb = async (dbURL) => {
    try {
        await mongoose.connect(dbURL);
        console.log("connected successfully ...");
    } catch (error) {
        console.error("connection error", error);
    }
};
connectdb(url);