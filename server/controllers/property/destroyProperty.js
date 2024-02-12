const PropertyModel = require('../../models/Property');

const destroyProperty = async(req, res) => {
    try {

        const property = await PropertyModel.findById(req.params.id);

        if(property.currentOwner.toString() !== req.user.id) {

            return res.status(403).json({"Unauthorized" : "Accès non authorisé à la suppression."});
        }

        await property.deleteOne();

        return res.status(200).json({"Success" : "Propriété supprimé avec succès."})
        
    } catch (error) {
        
        return res.status(500).json(error.message);
    }
}

module.exports = destroyProperty;