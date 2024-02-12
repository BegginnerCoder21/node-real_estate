const PropertyModel = require("../../models/Property");

const numberTypeProperty = async(req, res) => {

    try {
        const beachType = await PropertyModel.countDocuments({type: "Plage"});
        const VillageType = await PropertyModel.countDocuments({type: "Village"});
        const montainType = await PropertyModel.countDocuments({type: "Montagne"});

        return res.status(200).json({
            beach : beachType,
            village: VillageType,
            montain: montainType
        });

    } catch (error) {
        
        return res.status(500).json(error.message);
    }   
}

module.exports = numberTypeProperty;