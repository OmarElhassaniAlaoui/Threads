import mongoose from  "mongoose" ;  

let isConnected: boolean = false; 

export const connectToDatabase = async () => {  
    mongoose.set("strictQuery", true) ; 
    if(!process.env.MONGODB_URL) return console.error("MONGODB_URL is not set") ; 
    if(isConnected) return console.log("Already connected to database") ;
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL) ; 
        isConnected = db.connections[0].readyState === 1 ;
        console.log("Connected to database") ; 
    } catch (error) {
        console.error("Error connecting to database", error) ; 
    }
}  ;  