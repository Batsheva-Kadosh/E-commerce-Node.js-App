const { promiseQuery } = require("./sql");

const getOrderByUser = async (id) => {
    const query = `SELECT * 
                    FROM store.orders
                    where idUser = ${id};`
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;
    return result;
}

const addOrder = async ({ id, date, dueDate, idUser, address, phone, isClose }) => {
    const result = await promiseQuery(`insert into store.orders
    values (${id}, '${date}',' ${dueDate}', ${idUser}, '${address}', '${phone}', ${isClose})`);
    return result;
}

const deleteOrder = async (id) => {
    const result = await promiseQuery(`
        DELETE FROM store.orders
        WHERE id = ${id} ;`)
    return result;
}

const update = async ({ id, date, dueDate, idUser, address, phone, isClose }) => {
    const result = await promiseQuery(
        `UPDATE store.orders
        SET date ='${date}',dueDate= '${dueDate}', idUser  = ${idUser}, address = '${address}', phone='${phone}' ,isClose= ${isClose}
        WHERE id = ${id};`
    )
    return result;
}

const countOrdersByUser = async (id)=>{
    const result = await promiseQuery(
        `SELECT COUNT(*)
        FROM store.orders
        where idUser = ${id};`)
    return result;
}


module.exports = { getOrderByUser, addOrder, deleteOrder, update,countOrdersByUser }