const PropertyModel = require('../../models/Property');

const getProperty = async(req, res) => {

    try {

        const allProperties = await PropertyModel.find({}); 
        
        return res.status(200).json(allProperties);
        
    } catch (error) {
        
        return res.status(500).json(error.message);
    }


}

module.exports = getProperty;