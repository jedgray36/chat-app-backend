const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require('./routes/UserRoutes');
const conversationRoute = require('./routes/Conversations');
const messageRoute = require('./routes/Messages');
const authRoute = require('./routes/Auth');
const http = require('http');
const server = http.createServer(app);
const socketIo = require('socket.io');
const data = require('./friends');
const cors = require('cors');
const path = require("path");
const router = express.Router();

const mongoURL = 'mongodb+srv://jedgray0:GVEk5n9zM4MvC02z@cluster0.17m9tt5.mongodb.net/?retryWrites=true&w=majority'
const mongo = process.env.mongoURL;
const io = socketIo(server);

const corsOptions = {
    origin: 'http://localhost:3001'
  };


dotenv.config();

mongoose.connect(
    mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch(error => {
            console.error("Error connecting to MongoDB:", error);
        });

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());












 
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/conversation', conversationRoute);
app.use('/api/message', messageRoute);


server.listen(3001, () => {
    console.log('server is running on port 3001');
});

