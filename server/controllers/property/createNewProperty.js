const PropertyModel = require('../../models/Property');

const createNewProperty = async(req, res) => {

    try {
        const newProperty = await PropertyModel.create({...req.body,currentOwner : req.user.id});

        return res.status(201).json(newProperty);
        
    } catch (error) {
        
        return res.status(500).json(error.message);
    }
}

module.exports = createNewProperty;