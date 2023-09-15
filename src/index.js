var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

// Now you can use constructorParametersDownlevelTransform in your code


var app = Express();
app.use(cors());
app.use(Express.json());

var CONNECTION_STRING =
  "mongodb+srv://weeraya:projectbookyweeraya@cluster0.joqzugf.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME = "booky";
var database;

app.listen(4000, () => {
  Mongoclient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DATABASENAME);
    console.log("Mongo DB Connection Successful");
  });
});

app.get("/api/booky/GetProduct", (request, response) => {
  database
    .collection("product")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});


app.post("/api/booky/ADDProduct", (request, response) => {
    database.collection("product").countDocuments({}, function (error, numOfDocs) {
      const productData = {
        id: generateUniqueId(),
        name: request.body.name || "",
        rate: request.body.rate || 0,
        category: request.body.category || "",
        genre: request.body.genre || "",
        info: request.body.info || "",
        img: request.body.img || [],
        stock: request.body.stock || 0,
        price: request.body.price || 0,
      };
  
      // Filter out fields with default values
      const filteredProductData = Object.keys(productData).reduce((acc, key) => {
        if (productData[key] !== "" && productData[key] !== 0) {
          acc[key] = productData[key];
        }
        return acc;
      }, {});
  
      database.collection("product").insertOne(filteredProductData, (error, result) => {
        if (error) {
          // Handle the error
          response.status(500).json({ error: "Internal Server Error" });
        } else {
          response.json("Added Successfully");
        }
      });
    });
  });
  


function generateUniqueId() {
  // You can customize this logic to generate a unique ID
  // For example, you can use a combination of timestamps and random numbers
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000); // Adjust the range as needed

  return `${timestamp}-${random}`;
}

app.delete("/api/booky/DeleteProduct/:id", (request, response) => {
  const productId = request.params.id;
  
  database.collection("product").deleteOne(
    { id: productId },
    (err, result) => {
      if (err) {
        console.error("Error deleting product:", err);
        response.status(500).json({ error: "Failed to delete product" });
      } else {
        response.json("Delete Successfully");
      }
    }
  );
});


app.put("/api/booky/updateProduct/:productId", (request, response) => {
  const productId = request.params.productId;
  const updatedProductData = {
    name: request.body.name || "",
    rate: request.body.rate || 0,
    category: request.body.category || "",
    genre: request.body.genre || "",
    info: request.body.info || "",
    img: request.body.img || [],
    stock: request.body.stock || 0,
    price: request.body.price || 0,
  };

  // Filter out fields with default values
  const filteredProductData = Object.keys(updatedProductData).reduce((acc, key) => {
    if (updatedProductData[key] !== "" && updatedProductData[key] !== 0) {
      acc[key] = updatedProductData[key];
    }
    return acc;
  }, {});

  database.collection("product").updateOne({ id: productId }, { $set: filteredProductData }, (error, result) => {
    if (error) {
      // Handle the error
      response.status(500).json({ error: "Internal Server Error" });
    } else if (result.matchedCount === 0) {
      // Product with the specified ID was not found
      response.status(404).json({ error: "Product not found" });
    } else {
      response.json("Updated Successfully");
    }
  });
});



