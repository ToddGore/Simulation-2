module.exports = {

    getAll: (req, res) => {

        const db = req.app.get('db');
        db.get_all()
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const { nameInput, addressInput, cityInput, stateInput,
            zipInput, imgInput, mortgageInput, rentInput } = req.body
        console.log(req.body)
        db.add_product([nameInput, addressInput, cityInput, stateInput,
            zipInput, imgInput, mortgageInput, rentInput])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.delete_product([id])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())

    }








}