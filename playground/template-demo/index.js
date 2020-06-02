const app = require("express")();
const hbs = require("hbs");

app.set("view engine", "hbs");
// app.set("view engine", "ejs");
// app.set("view engine", "vash");
// app.set("view engine", "jade");

hbs.registerPartial("header", "Header Info");

app.get("/",(req, res)=>{
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about", {username : "Foo Bar", email : "test@example.com"});
})

app.listen(9090, () => {console.log("Server started")})




// Last Day Feedback	
// https://www.surveymonkey.com/r/WNMRKL5
