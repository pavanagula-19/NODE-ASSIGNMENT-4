const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("/", (req, resp) => {
    // console.log("home")
    resp.send("Hello world!")
})
app.post("/add", (req, resp) => {
    const { num1, num2 } = req.body
    console.log(typeof num1)
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        resp.status(400).json({
            status: "error",
            messgage: "Invalid data types"
        });
    }
    let sum = num1 + num2
    if (sum < -1000000 || num1 < -1000000 || num2 < -1000000) {
        resp.status(400).json({
            status: "failure",
            messgage: "Underflow"
        })
    }
    if (sum > 1000000 || num1 > 1000000 || num2 > 1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Overflow"
        })
    }
    else {
        resp.status(200).json({
            status: "success",
            message: "the sum of given two numbers",
            result: sum
        })
    }
})
app.post("/sub", (req, resp) => {
    const { num1, num2 } = req.body
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        resp.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let sub = num1 - num2
    if (sub < -1000000 || num1 < -1000000 || num2 < -1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Underflow"
        })
    }
    if (sub > 1000000 || num1 > 1000000 || num2 > 1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Overflow"
        })
    }
    else {
        resp.status(200).json({
            status: "success",
            message: "the difference of given two numbers",
            result: sub
        })
    }
})

app.post("/multiply", (req, resp) => {
    const { num1, num2 } = req.body
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        resp.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let multiply = num1 * num2
    if (multiply < -1000000 || num1 < -1000000 || num2 < -1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Underflow"
        })
    }
    if (multiply > 1000000 || num1 > 1000000 || num2 > 1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Overflow"
        })
    }
    else {
        resp.status(200).json({
            status: "success",
            message: "The product of given numbers",
            result: multiply
        })
    }
})

app.post("/divide", (req, resp) => {
    const { num1, num2 } = req.body
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        resp.status(400).json({
            status: "error",
            messaage: "Invalid data types"
        })
    }
    // console.log(divide)
    if (num2 == 0) {
        resp.status(400).json({
            status: "error",
            message: "Cannot divide by zero"

        })
    }

    let divide = num1 / num2

    if (divide < -1000000 || num1 < -1000000 || num2 < -1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Underflow"
        })
    }
    if (divide > 1000000 || num1 > 1000000 || num2 > 1000000) {
        resp.status(400).json({
            status: "failure",
            message: "Overflow"
        })
    }
    else {
        resp.status(200).json({
            status: "success",
            message: "The division of given numbers",
            result: divide
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;