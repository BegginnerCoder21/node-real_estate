const PropertyModel = require('../../models/Property');

const featuredProperty = async(req, res) => {
    try {

        const featuredProperties = await PropertyModel
                                                    .findOne({featured : true})
                                                    .populate('currentOwner','-password');

        return res.status(200).json(featuredProperties);
        
    } catch (error) {
        
        return res.status(500).json(error.message);
    }
}

module.exports = featuredProperty;