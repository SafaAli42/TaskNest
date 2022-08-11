const express = require('express')
const app = express()

const users = [{ id: 1, name: 'Mike', tasks: ['Study', 'Cook'] },
{ id: 2, name: 'Sara', tasks: ['Meet Friends'] }]

app.get('/', (req, res) => {
    res.send("hello")
}).listen(8069)


app.get('/users', (req, res) => {
    res.send(users)
})

app.use('/users/:id', function (req, res, next) {
    console.log(req.params); 
    next();
});

app.get('/users/:id', (req, res) => {
    let findUser = users.find((user) => user.id == req.params.id)
    res.send(findUser)
})


app.get('/users/:id/tasks',(req,res)=>{
    users.find((user)=>{if(user.id==req.params.id){
        res.send(user.tasks);  
    }})
})