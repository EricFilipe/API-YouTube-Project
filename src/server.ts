import express from 'express'
import { useRoutes } from './routes/user.routes'
import { videosRoutes } from './routes/videos.routes'
import { config } from 'dotenv'

config()
const app = express()

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});



app.use(express.json())
app.use('/user', useRoutes)
app.use('/videos', videosRoutes)

const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`server running on port ${port}`))