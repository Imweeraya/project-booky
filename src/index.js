var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");


var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://weeraya:projectbookyweeraya@cluster0.joqzugf.mongodb.net/?retryWrites=true&w=majority"


var DATABASENAME = "booky"
var database;

app.listen(4000, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database = client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    });
});


app.get('/api/booky/GetProduct', (request, response) => {
    database.collection("product").find({}).toArray((error, result) => {
        response.send(result);
    });
});



app.post('/api/booky/ADDProduct',multer().none(), (request, response) => {
    database.collection("product").count({},function(error,numOfDocs){
        database.collection("product").insertOne({
            id:(numOfDocs+1).toString()
        });
        response.json("Added Succesfully");
    })
  });

app.delete('/api/booky/DeleteProduct',(request, response)=>{
    database.collection("prosuct").deleteOne({
        id:request.query.id
    });
    response.json("Delete Successfully")
})
  
