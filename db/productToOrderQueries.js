const { promiseQuery } = require("./sql");



const getAllProductByOrder = async (id) => {
    const query = `select pr.*
                    from store.products pr
                    join store.productstoorder po  
                    on pr.id = po.idProduct
                    where po.idOder = ${id}`
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;
    return result;
}

const getProductAndOrderDetailsByOrder = async (id) => {
    const query = `select  o.*
                    from store.productstoorder po 
                    join store.orders o
                    on o.id = po.idOder
                    where po.idOder = ${id}
                    group by o.id;`
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;
    const result2 = getAllProductByOrder(id)
    if (result2.length == 0)
        return null;

    return result;
    // return result + result2;
}

const addProductToOrder = async ({ id, idProduct, idOder, qty }) => {
    const result = await promiseQuery(`insert into store.productstoorder 
                                        values  (${id},${idProduct},${idOder}, ${qty});`);
    return result;
}

const deleteProductToOrder = async (id) => {
    const result = await promiseQuery(`
        DELETE FROM store.productstoorder
        WHERE idOder = ${id} ;`)
        return result;
}

module.exports = { getAllProductByOrder, getProductAndOrderDetailsByOrder, addProductToOrder,deleteProductToOrder }