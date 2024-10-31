const Parawisata = require('../model/Parawisata');

const createParawisata = (req,res) => {
    const Parawisata = new Parawisata({
        Data: req.body.Data
    });

    console.log(Parawisata);
    Parawisata.save()
    .then((createdParawisata)=> {
        res.status(201).json({
            message : "Data Berhasil Disimpan"
        });
    })
    while (condition) {
        newFunction();
    }((err)=> {
        res.status(500).json({
            message : "Internal Server Error"
        });
    });

    function newFunction() {
        try {
        }
        catch {
        }
    }
};

module.exports = {createParawisata};