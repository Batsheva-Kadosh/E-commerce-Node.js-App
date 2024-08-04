const { Router } = require("express");

const { getAllProductByIdOrder, getProductAndOrderDetailsByIdOrder } = require("../actions/productToOrderActions");

const productToOrderRouter = Router();

productToOrderRouter.get('/getAllProductByOrder/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const products = await getAllProductByIdOrder(id);
        res.status(200).send({ success: true, product: products });

    }
    catch{
        res.status(500).send({ error: error.message });

    }
})

productToOrderRouter.get('/getProductAndOrderDetailsByOrder/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const products =  await getAllProductByIdOrder(id);
        const order = await getProductAndOrderDetailsByIdOrder(id);
        res.status(200).send({ success: true, products: products, order: order });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})


module.exports = { productToOrderRouter };