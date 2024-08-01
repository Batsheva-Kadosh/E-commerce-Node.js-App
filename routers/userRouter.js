const { Router } = require("express");

// const { getAllUsers, register, loginUser } = require("../actions/userActions");
const { getAllUsers, registerUser, loginUser } = require("../actions/userActions");

const usersRouter = Router();

usersRouter.get('/getAll', async (req, res) => {
    try {
        const users = await getAllUsers();
        if (users != null)
            res.status(200).send({ success: true, users: users });
        else
            res.status(401).send({ success: false, users: null });

    } catch (error) {
        res.status(500).send(err);
    }
})
usersRouter.post('/register', async (req, res) => {
    // const b= req.body;
    const { id, name, email, password, street, city, houseNumber, phone, status } = req.body;
    try {
        console.log("----------------------------------------------------");
        const user = await registerUser({ id, name, email, password, street, city, houseNumber, phone, status });
        res.status(200).send({ success: true, user: user.insertId });
    }
    catch (err) {
        res.status(500).send(err);
    }
})
usersRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        if (user != null)
            res.status(200).send({ success: true, user: user });
        else
            res.status(401).send({ success: false, user: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = { usersRouter };