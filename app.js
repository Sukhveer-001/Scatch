const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const db = require("./config/mongoose-connection");
const userRouter = require("./routes/userRouter");
const ownerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/owners", ownerRouter);
app.use("/products", productRouter);

app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(3000);
