const mongoose = require ('mongoose');

const ParawisataSchema = new mongoose.schema(
    {
        Data:[{
            type: String,
            required: true
        }]
    }
);

module.exports = mongoose.model('Parawisata',ParawisataSchema);