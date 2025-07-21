import express from 'express'
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
import loginRoutes from './routes/login.routes'
import salesRoutes from "./routes/sales.routes"
import cors, { CorsOptions } from 'cors';

const app = express() //usa express para iniciar o servidor
app.use(express.json()) //utiliza json como comunicação
app.use(cors())

app.use('/api', userRoutes) // Faz a API entender as rotas de usuário omo rota (Permite ser usada)
app.use('/api', productRoutes)
app.use('/api',loginRoutes)
app.use('/api', salesRoutes)

export default app