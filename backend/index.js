import  express, { request, response }  from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksroute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

// middlewaare for parsing request body
app.use(express.json());

// middleware for handling CORS Policy
// method 1
app.use(cors())
// =====================================

// middleware for handling CORS Policy
// method 2
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         method:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// )

app.get('/',(request,response)=>{
    console.log(request)
    return response.send("Hi")
});
 
app.use('/books',booksroute)

// =====================================

mongoose.connect(mongoDBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
 console.log('App Connected to Database');

 app.listen(PORT,()=>{
    console.log(`App is listening to port:${PORT}`)
});

}).catch((err)=>{
console.log(err);
});