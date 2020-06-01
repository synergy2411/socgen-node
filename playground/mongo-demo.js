const mongodb = require("mongodb");
const client = mongodb.MongoClient;
let _db;

// const uri = "mongodb://localhost:27017/test";

client.connect(
  `
mongodb+srv://new_user_1:krsna123@cluster0-e9xsq.mongodb.net/test?retryWrites=true&w=majority
`,
  { useUnifiedTopology: true },
  (err, mongo) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("Mongo Connected");
    _db = mongo.db("test");
    // createRecord();
    // readRecord();
    // updateRecord();
    deleteRecord();
  }
);

// Create
const createRecord = () => {
  _db.collection("todos").insertOne({ label: "pot the plant", status: false }, (err, data) =>{
      if(err) console.log(err);
      console.log(data.result.n)
  });
};
// Find/Read
const readRecord = () => {
    _db.collection("todos").find().toArray((err , docs) => {
        if(err) console.log(err);
        console.log(docs);
    })
}
// Update
const updateRecord = () => {
    _db.collection("todos").updateOne({status : false}, {$set : {status : true}}, (err, data) => {
        if(err) console.log(err)
        console.log(data.result.n);
    })
}
// Delete
const deleteRecord = () => {
    _db.collection("todos").deleteOne({status : true}, (err, data) => {
        if(err) console.log(err);
        console.log(data.result.n)
    })
}