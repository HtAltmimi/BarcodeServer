const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const { json } = require('express');


const Port = process.env.PORT || 3000;

require("./model");
const productController = require("./controller/productController");
const invoiceController = require('./controller/invoiceContorller');
app.get("/x",invoiceController.selectInvoice);
app.get('/', (req,res)=>{
    res.send("<h1> Chat Server </h1>")
});

io.on('connection',socket=>{
    console.log("connection", socket.id);
    socket.on("InsertProduct",async function(data, callback) {
        console.log(data);
       var isInsert =await productController.InsertProduct(data.id,data.name , data.weight , data.price);
       console.log(isInsert);
       
       if(isInsert){
       callback({
      status: true
    });
       }else{
        callback({
      status: false
    });
       }
    });//end of InsertProduct
    socket.on("selectedProduct" , async (data)=>{
        console.log(data);
        console.log("productSelected");
        var Product = await productController.selectProduct(data);
        if (Product){
            console.log(Product);
            socket.emit("selectedProduct",Product);
        }
    });// end of selected producte
     socket.on("InsertInvoice", async (data)=>{
        
        const insertInvoice = await invoiceController.insertInvoice(data.totalPrice, data.totalWeight , data.product);
        socket.emit("InsertInvoice",insertInvoice);
        
   });//end of insert invoice
   socket.on("InvoiceBayed",async ()=>{    
    console.log('kdkdkddkkd');
        const invoiceBayed = await invoiceController.selectInvoice();
        
        socket.emit("InvoiceBayed", JSON.stringify(invoiceBayed));
        
   });
   
    socket.on("disconnect", ()=>{
        console.log("disconnect"+socket.id)
    });//end of DisConnect
});
server.listen(Port,()=>{
    console.log('server running in port 3000  ');
});
