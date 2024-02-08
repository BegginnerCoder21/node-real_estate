const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
userModel = require('../../models/User');

const login = async(req,res) => {
    
    const {email, password} = req.body;

    if(!email || !password){

        return res.status(422).json({'ErrorEmpty' : 'Aucun champ ne doit rester vide'});
    }

    const user = await userModel.findOne({email}).exec();

    if(!user){
        return res.status(422).json({'Error': 'Email ou mot de passe incorect.'});
    }

    const comparePassword = await bcrypt.compare(password,user.password);

    if(!comparePassword){
        return res.status(422).json({'Error': 'Email ou mot de passe incorect.'});
    }

    const {...userConnected} = await user.toObject({getters: true});
    const token = jwt.sign({'id' : user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '4h'});


    res.status(201).json({userConnected,token});
    
    try {
        
    } catch (error) {
        
        return res.status(500).json(error.message);
    }
}

module.exports = login