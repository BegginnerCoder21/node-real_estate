const PropertyModel = require('../../models/Property');

const updateProperty = async(req, res) => {

    try {
            if(!req.params.id){
                return res.status(404).json({"Error" : "propriété non trouvé."});
            }
            const property = await PropertyModel.findById(req.params.id);
     
            if(property.currentOwner.toString() !== req.user.id){

                return res.status(403).json({"Unauthorized" : "Accès non authorisé à la modification."});
            }

            const updatedProperty = await PropertyModel.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
            );

            return res.status(201).json(updatedProperty);
            

    } catch (error) {
        
        return res.status(500).json(error.message);
    }
}

module.exports = updateProperty;