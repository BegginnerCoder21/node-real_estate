
const uploadImages = (req, res) => {
    try {

        return res.status(200).json('Fichier téléchargé avec succès.');

    } catch (error) {

        return res.status(500).json(error.message);
    }
}

module.exports = uploadImages;