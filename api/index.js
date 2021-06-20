const express = require('express')
const app = express();
const port = 8000;
const fs = require("fs")

function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/users", (req,res) => {
    res.send(JSON.parse(fs.readFileSync("users.json")))
})

app.get("/profile/:id", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json"))
    const id = req.params.id
    users.users.forEach(user => {
        if (user.id == parseInt(id)){
            res.send({success: true, user: user})
        }
    })
    res.send({success: false, id: id})
})

app.post("/update/password", (req,res)=> {
    const id = req.params.id
    const password = req.params.password
    const users = JSON.parse(fs.readFileSync("users.json"))
    users.users[id].password = password
    res.send({success: true})
})

app.get("/login", (req,res)=>{

    const id = req.query.id
    const password = req.query.password
    const users = JSON.parse(fs.readFileSync("users.json"))
    users.users.forEach(user => {
        if(user.role == "regular"){
            if(id == user.id && password == user.password){
                res.send({success: true, user: user, admin: false})
            }
        }else if(user.role == "admin"){
            if(id == user.id && password == user.password){
                res.send({success: true, admin: true, user: user, users: users})
            }
        }
    })
    res.send({success: false})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});