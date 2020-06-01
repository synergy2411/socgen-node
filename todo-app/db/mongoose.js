const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://new_user_1:krsna123@cluster0-e9xsq.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})
    .then(mongo => {
        console.log("Mongo Connected...");
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })