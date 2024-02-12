const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next) => {
    
    const bearerToken = req.headers.authorization || req.headers.Authorization;

    if(bearerToken?.startsWith('Bearer')){

        const token = bearerToken.split(' ')[1];
        
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async(error, data) => {

            if(error){
               return res.status(403).json(error);
            }   
            
            req.user = data;
            return next();
        });
    }else{
        return res.status(403).json({"ExpiredToken" : "Accès non authorisé."})
    }
}

module.exports = verifyToken;