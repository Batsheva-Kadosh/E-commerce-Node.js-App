const { Router } = require("express")
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../actions/productActions');

const productsRouter = Router();

productsRouter.get('/getAll', async (req, res) => {
    try {
        console.log("product!!!!!!!!!!!!!");

        const products = await getAllProducts();
        if (products != null)
            res.status(200).send({ success: true, products: products });
        else
            res.status(401).send({ success: false, products: null });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})



productsRouter.post('/add', async (req, res) => {
    const { id, name, descproduct, img, price, inStock } = req.body;
    try {
        const product = await addProduct({ id, name, descproduct, img, price, inStock });


        res.status(200).send({ success: true, product: product.insertId });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

productsRouter.put('/update', async (req, res) => {
    const { id, name, descproduct, img, price, inStock } = req.body;
    try {
        const product = await updateProduct({ id, name, descproduct, img, price, inStock });
        res.status(200).send({ success: true, product: product });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
productsRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await deleteProduct(id)
        const products = await getAllProducts();
        res.status(200).send({ success: true, product: products });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})


module.exports = { productsRouter };