// const jwt = require("jsonwebtoken");

// const { getAllUser, register, login } = require("../db/userQueries");
const { getAllUser, register, login } = require("../db/userQueries");

const getAllUsers = async () => {
    const users = await getAllUser();
    return users;
}

const registerUser = async ({ id, name, email, password, street, city, houseNumber, phone, status }) => {
    const result = await register({ id, name, email, password, street, city, houseNumber, phone, status });
    return result;
}

const loginUser = async (email, password) => {

    const user = await login(email, password);
    return user;

}

module.exports = { getAllUsers, registerUser, loginUser }
// module.exports = { getAllUsers, register, loginUser }