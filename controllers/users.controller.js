var UserService = require('../services/user.service');
var UserImgService =require('../services/userImg.service');

_this = this;

exports.getUsers = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Users = await UserService.getUsers({}, page, limit);
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Users Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getUser = async function (req, res, next) {
    try {
        let filtro= {email: req.body.email, _id: req.body.id}
        var user = await UserService.getUsers(filtro, 1, 1);
        return res.status(200).json({status: 200, data: user, message: "Succesfully User Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createUser = async function (req, res, next) {
    console.log("llegue al controller",req.body)
    var User = {
        name: req.body.user.name,
        cellphone: req.body.user.cellphone,
        email: req.body.user.email,
        password: req.body.user.password
    }
    try {
        var createdUser = await UserService.createUser(User)
        return res.status(201).json({createdUser, message: "Succesfully Created User"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
    }
}

exports.updateUser = async function (req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }
    
    var User = {
        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        password: req.body.password ? req.body.password : null
    }
    try {
        var updatedUser = await UserService.updateUser(User)
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeUser = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await UserService.deleteUser(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.loginUser = async function (req, res, next) {
    console.log("body",req.body);
    var User = req.body.user;
    try {
        var loginUser = await UserService.loginUser(User);
        return res.status(201).json({loginUser, message: "Succesfully login"})
    } catch (e) {
        return res.status(400).json({status: 400, message: "Invalid username or password"})
    }
}

exports.guardarImagenUser = async function (req, res, next) {
    console.log("ImgUser",req.body)
    // Id is necessary for the update
    if (!req.body.email) {
        return res.status(400).json({status: 400., message: "Mail must be present"})
    }

    let userImg = {
        email: req.body.email,
        nombreImagen : req.body.nombreImagen
    }
    
    try {
        if (userImg.nombreImagen!=='')
        {
            var newUserImg = await UserImgService.createUserImg(userImg);
        }
        
        return res.status(201).json({status: 201, message: "Imagen cargada"});
        
    } catch (e) {
        console.log("error guardar imagen",e)
        return res.status(400).json({status: 400., message: e.message})
    }
}

