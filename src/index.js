//env variable from dotenv remain in env variables as long as server is running
const express = require('express');

const ServerConfig = require('./config/serverConfig');
const connectdb = require('./config/dbConfig');
const app = express();

app.listen(ServerConfig.PORT,async ()=>{
    await connectdb();
    console.log(`Server running on port ${ServerConfig.PORT}`);
})