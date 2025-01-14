const express=require('express');
const dotenv=require('dotenv').config();
const http=require('http');
const {Server}=require('socket.io');
const app=express();
const server=http.createServer(app)
const cors=require('cors');
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173"
    }
});
let ListOfData=[];

io.on('connection',(socket)=>{
    console.log("User connected successfully",socket.conn.transport.name);
// Create data 
    socket.on("data",(abc)=>{
        console.log(abc);
        ListOfData.push(abc);
        io.emit("ListOfData", ListOfData); // Broadcast updated data to all clients

    })


    socket.on("editData", (updatedData) => {
        const index = ListOfData.findIndex((item) => item.id === updatedData.id);
        if (index !== -1) {
          ListOfData[index] = updatedData; // Update the item
          io.emit("ListOfData", ListOfData); // Broadcast updated data to all clients
        }
})


socket.on("deletedata", (id) => {
    console.log("Deleting item with id:", id);
    const index = ListOfData.findIndex((item) => item.id === id); // Compare the item.id with the id from the client
    console.log("Found index:", index);
    if (index !== -1) {
        ListOfData.splice(index, 1); // Remove the item from the array
        io.emit("ListOfData", ListOfData); // Broadcast the updated list to all clients
    } else {
        console.log("Item not found for deletion");
    }
});

});



const  port=process.env.PORT;

server.listen(port,()=>{
    console.log(`Port is listening on ${port} and url is http://localhost:${port}`);

})