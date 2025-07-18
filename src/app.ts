import express from 'express'
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'

const app = express() //usa express para iniciar o servidor
app.use(express.json()) //utiliza json como comunicação
app.use('/api', userRoutes)
app.use('/api', productRoutes)

export default app