import express from 'express'
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
import loginRoutes from './routes/login.routes'
import salesRoutes from "./routes/sales.routes"
//import cors, { CorsOptions } from 'cors';

const app = express() //usa express para iniciar o servidor
app.use(express.json()) //utiliza json como comunicação
app.use('/api', userRoutes) // Faz a API entender as rotas de usuário omo rota (Permite ser usada)
app.use('/api', productRoutes)
app.use('/api',loginRoutes)
app.use('/api', salesRoutes)

//#region CORS
// const allowedOrigins: string[] = ['http://localhost:5173'];
 
//  const corsOptions: CorsOptions = {
//    origin: (origin, callback) => {
//      // The 'origin' is the URL of the frontend making the request
//      // We check if the origin is in our list of allowed origins
//      if (origin && allowedOrigins.includes(origin)) {
//        callback(null, true); // Allow the request
//      } else {
//        callback(new Error('Not allowed by CORS')); // Block the request
//      }
//    },
//    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods        
//    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers     
//    credentials: true, // Allow cookies to be sent
// };

// // --- Apply Middleware ---
// // IMPORTANT: This must come BEFORE your routes are defined.
// app.use(cors(corsOptions));
//#endregion

export default app