const express = require("express");
const userRoute = require("./routes/userRoutes");

const app = express();

app.use(userRoute);

app.listen(8000);
