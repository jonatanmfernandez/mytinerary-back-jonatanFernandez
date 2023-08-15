import express from "express";

const server = express()
server.get('/', (request, response, next) =>{
    response.send("Welcome to the server")
})

server.listen(4000, ()=> { console.log("Prueba")})

