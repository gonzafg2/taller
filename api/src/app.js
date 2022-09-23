const express = require("express");
const app = express();
const cors = require("cors");
const pizzas = require("./routes/pizzas");

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/pizzas", pizzas);

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
