const mongo = require("mongodb").MongoClient;
let _db;

const connect = () => {
  mongo.connect(
    "mongodb+srv://new_user_1:krsna123@cluster0-e9xsq.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, mongo) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log("Mongo connected...");
      _db = mongo.db("test");
    }
  );
};
const insertDocument = (doc) => {
    console.log("DOCUMENT : ", doc);
  _db.collection("chats").insert(doc, (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("Rows affected :", data.result.n);
  });
};

module.exports = { connect, insertDocument };
