import express from 'express';
import { useRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config()
const app = express()

const cors = require('cors');
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE",
  allowedHeaders: "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers",
  credentials: true,
  maxAge: 7200
}));



app.use(express.json())
app.use('/user', useRoutes)
app.use('/videos', videosRoutes)

const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`server running on port ${port}`))