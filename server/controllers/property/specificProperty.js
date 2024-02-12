const PropertyModel = require("../../models/Property");

const specificProperty = async(req, res) => {
        const typeProperty = req.query;
        console.log(typeProperty);
        
    try {
        if(typeProperty){
            const properties = await PropertyModel
                                                .find(typeProperty)
                                                .populate("currentOwner","-password");

            return res.status(200).json(properties);
        }else{

            return res.status(500).json({"NotFound" : "type de propriété non trouvé"});
        }
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = specificProperty;