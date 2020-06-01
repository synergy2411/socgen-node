const mongodb = require("mongodb");
const client = mongodb.MongoClient;
let _db;
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
    createRecord();
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
// Update
// Delete
