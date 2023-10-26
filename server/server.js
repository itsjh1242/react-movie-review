const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      name: "홍길동",
      age: 30,
    },
    {
      id: 2,
      name: "이순신",
      age: 40,
    },
    {
      id: 3,
      name: "유관순",
      age: 50,
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
