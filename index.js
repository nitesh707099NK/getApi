const express = require('express');
const app = express();

app.use(express.json());




let users = [
    { id: 1, name: "nitesh", email: "nitesh@gmail.com" },
    { id: 2, name: "sani", email: "sani@gmail.com" },
    { id: 3, name: "sumit", email: "sumit@gmail.com" }
];

app.post('/nitesh',(req,res)=>{
    const stundt={
    id:users.length+1,
    name:req.body.name,
    email:req.body.email

    }
    users.push(stundt);
    res.status(201).json({
        message :"new add successfully",
        data: stundt
    })
})

app.get('/users', (req, res) => {
    res.json({
        message: "Fetched successfully",
        usersData: users
    });
}); 


app.listen(3000, () => {
    console.log("Server is running on port 10000");
});