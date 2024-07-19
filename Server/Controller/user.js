
const {models} = require("../Models/index");
const userDB = models.User
const jwt = require("jsonwebtoken")


exports.userLogin = async (req,res) =>{
    try{
      

        let {name, password} = req.body;
        console.log(req.body)
        let userData = await userDB.findOne({ where : {
            name : name 
        }})
        
        if(password !== userData.password){
            return res.status(401).send("Wrong Password")
        }

        let token = jwt.sign(name, "test")
      

        // res.cookie("token",token);
        res.header('Authorization', `Bearer ${token}`)
        res.set('Location', '/api/afterLogin');
        res.status(302).send();


    }catch(e){
        console.log(e)
        res.send("error")
    }
}

exports.createUser = async (req,res) =>{
try{
    console.log(req.body);
    let {name, password} = req.body;
    console.log("werq")
    let newUser = await models.User.create({"name":name, "password": password});
    console.log(newUser)
    res.status(201).json(newUser)
}
catch(e){
    console.log(e)
    res.status(400).json(e)
}

}

exports.jwtFunc=async(req,res,next)=>{
    try{
    
    
    // let token = req.cookies.token;
    const token = req.header('Authorization');
    console.log("heade",req.header)
    console.log("----",token)
    let user = jwt.verify(token,"test");
    console.log("usertoken",user)
    next();
    }
    catch(e){
        // res.clearCookie("token");
        console.log("e",e)
        return res.json(e)
    }
}

exports.afterLogin = async(req,res)=>{
    
    console.log("test")
    res.send("test")
}
