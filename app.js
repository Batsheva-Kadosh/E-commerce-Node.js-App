const express = require("express");
const cors = require("cors");


const { mySqlConnection, promiseQuery } = require("./db/sql")
const { usersRouter } = require("./routers/userRouter");


const app = express();
const PORT = 8081;


app.use(express.json());
app.use(cors());


app.use("/user", usersRouter);


app.listen(PORT, (err) => {
    if (err) {
        console.log('error while runing server', err);
    }
    else
        console.log('server is runing in port', PORT);
});

mySqlConnection.connect(function (err) {
    if (err)
        console.log(err);
    else
        console.log("success");
})


app.get("/hello", async (req, res) => {
    res.send("hello")
});
