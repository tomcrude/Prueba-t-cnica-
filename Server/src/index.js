const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const routes = require("./Routes/routes")

const app = express()

const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors())
app.use(express.json())

app.use("/", routes);

app.listen(port, ()=>{
    console.log(`server open in port ${port}`)
})
