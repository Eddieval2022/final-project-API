require("./db/connection.js")
const express = require("express"); 
const cors = require("cors");
const userRouter = require("./user/routes");
const delRouter = require("./Delivery/routes")
const app = express();
const port = process.env.PORT || 5001;


app.use(express.json());

app.use(cors());
app.use(userRouter);
app.use(delRouter);


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
}); 