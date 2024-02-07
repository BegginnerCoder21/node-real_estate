const jwt = require('jsonwebtoken');
const UserModel = require('../../models/User');
const bcrypt = require('bcrypt');

const register = async (req,res) => {

    const {username, email, password, password_confirm} = req.body;

    if(!username || !email || !password || !password_confirm){
        return res.status(422).json({'ErrorEmpty' : 'Aucun champ ne doit rester vide'});
    }

    if(password !== password_confirm){
        return res.status(422).json({'ErrorEmpty' : 'Les mots de passe sont differents !'});
    }

    const emailExist = await UserModel.exists({email}).exec();
    if(emailExist){
        return res.status(409).json({'ErrorEmpty' : 'Email entré existe déjà, veillez entrer un autre mail SVP'});
    }
    console.log('password',password);
    const hashedPassword = await bcrypt.hash(password,10);

    try {

        const newUser = await UserModel.create({username, email, password: hashedPassword});
        const {password, ...others} = newUser._doc;
        const token = jwt.sign({id: newUser._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '4h'});

        return res.status(201).json({others,token});

        
    } catch (error) {

        return res.status(500).json(error.message);
    }
}

module.exports = register;