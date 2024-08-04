
const { getAllProductByOrder, getProductAndOrderDetailsByOrder } = require("../db/productToOrderQueries");

const getAllProductByIdOrder = async (id) => {
    const products = await getAllProductByOrder(id);
    return products;
}

const getProductAndOrderDetailsByIdOrder = async (id) => {
    const orderDetail = await getProductAndOrderDetailsByOrder(id);
    return orderDetail;
}

module.exports = { getAllProductByIdOrder, getProductAndOrderDetailsByIdOrder };