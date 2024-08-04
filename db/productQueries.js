const { promiseQuery } = require("./sql");


const getAllProduct = async () => {
    const query = ` SELECT * FROM store.products`
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;
    return result;
}

const add = async ({ id, name, descproduct, img, price, inStock }) => {
    const result = await promiseQuery(`insert into store.products 
    VALUES (${id}, '${name}', '${descproduct}','${img}', ${price}, ${inStock})`);
    return result;
}

// לעדכן מוצר קיים איך עושים את זה?
const update = async ({ id, name, descproduct, img, price, inStock }) => {
    const result = await promiseQuery(`UPDATE store.products
    SET name ='${name}',descproduct = '${descproduct}', img  = '${img}',price = ${price}, inStock= ${inStock}
    WHERE id = ${id}; `)
    return result;

}

const deleteP = async (id) => {
    const result = await promiseQuery(`DELETE FROM store.products
    WHERE id = ${id};`)
    return result;
}
module.exports = { getAllProduct, add, update, deleteP };
