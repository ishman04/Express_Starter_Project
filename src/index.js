//env variable from dotenv remain in env variables as long as server is running
const express = require('express');

const ServerConfig = require('./config/serverConfig');
const app = express();

app.listen(ServerConfig.PORT,()=>{
    console.log(`Server running on port ${ServerConfig.PORT}`);
})