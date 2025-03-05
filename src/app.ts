import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import comicRoutes from './routes/comicRoutes'
import peliculaRoutes from './routes/peliculaRoutes'
import personajeRoutes from './routes/personajeRoutes'

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/comics', comicRoutes)
app.use('/peliculas', peliculaRoutes)
app.use('/personajes', personajeRoutes)


app.listen(3001, () => {
    console.log('Server is running on port 3000');
})

export default app