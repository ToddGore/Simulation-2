module.exports = {

    getAll: (req, res) => {

        const db = req.app.get('db');
        db.get_all()
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state,
            zip, img, mortgage, rent } = req.body
        // console.log(req.body)
        db.add_product([name, address, city, state,
            zip, img, mortgage, rent])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },
    deleteProduct: (req, res) => {
        console.log('TEST1 ')
        const db = req.app.get('db');
        const { id } = req.params
        console.log('TEST2 ', req.params)
        db.delete_product([id])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())

    }








}