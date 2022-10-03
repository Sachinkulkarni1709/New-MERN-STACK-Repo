const express = require("express");
const app = express();

const port = 8000;

app.get("/",(req,res)=>{
    return res.send("Home page");
})

const admin = (req,res)=>{
    return res.send("Admin dashbord");
}

const isadmin = (req,res,next) =>{
    console.log("isadmin is running");
    next();
}

const isloggedin = (req,res,next) =>{
    console.log("admin is loggedin");
    next();
}

app.get("/admin", isloggedin ,isadmin ,admin);



app.get("/login",(req,res)=>{
    return res.send("You are visiting logIn route");
})


app.get("/signout",(req,res)=>{
    return res.send("You are signout");
})

app.get("/hitesh",(req,res)=>{
    return res.send("Hitesh uses Instagram");
})

app.get("/sachin",(req,res)=>{
    return res.send("Hi Sachin");
})

app.listen(port,()=>{
    console.log("Server is up and running...");
})





// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })