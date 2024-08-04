const { getAllProduct, add, update, deleteP } = require('../db/productQueries');

const getAllProducts = async () => {
    const products = await getAllProduct();
    return products;
}

const addProduct = async ({ id, name, descproduct, img, price, inStock }) => {
    const result = await add({ id, name, descproduct, img, price, inStock });
    return result;
}

const updateProduct = async ({ id, name, descproduct, img, price, inStock }) => {
    const result = await update({ id, name, descproduct, img, price, inStock });
    return result;
}
const deleteProduct = async(id)=> {
    const result  = await deleteP(id);
    return result;
}

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };