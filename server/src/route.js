const Midterm = require('./controllers/midterm66')
const UserController = require('./controllers/UserController')

module.exports = (app) =>{
    //get all user
    app.get('/users', UserController.index),

    //create
    app.post('/user', UserController.create),

    //edit
    app.put('/user/:userId', UserController.put)

    //delete
    app.delete('/user/:userId', UserController.delete)
    
    //show by id
    app.get('/user/:userId', UserController.show)

    app.post('/add1', Midterm.add1)

    app.post('/Modulus', Midterm.Modulus)

    app.post('/GCD', Midterm.GCD)

}