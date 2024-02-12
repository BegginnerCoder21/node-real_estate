const PropertyModel = require('../../models/Property');

const getProperty = async(req, res) => {
    try {
        const property = await PropertyModel
                                            .findById(req.params.id)
                                            .populate("currentOwner","-password");

        if(!property){
            res.status(500).json({"Error" : "propriété non trouvé"});

        }else{

            return res.status(200).json(property);
        }
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = getProperty;