const { promiseQuery } = require("./sql");



const getAllUser = async () => {
    const query = ` SELECT * FROM store.users`
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;
    return result;
}

const register = async ({ id, name, email, password, street, city, houseNumber, phone, status
}) => {
    const result = await promiseQuery(`insert into store.users 
    VALUES (${id}, '${name}', '${email}','${password}', '${street}', '${city}', '${houseNumber}', '${phone}', ${status})`);
    
    // insert into store.users
    // VALUES(0, "Batsheva", "btsh4056@gom.com", "1234", "456 Elm St", "Bayt- shemsh", "2B", "0548544056", 0)
    
    return result;
}

const login = async (email, password) => {
    const query = ` SELECT * FROM store.users  WHERE email = '${email}'  and password = '${password}'; `;
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result[0];
}


module.exports = { getAllUser, register, login }  