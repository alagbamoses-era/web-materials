import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const firstName = req.body["fName"].length;
  const lastName = req.body["lName"].length;
  const fullName = firstName + lastName;
  console.log(fullName);
  res.render("index.ejs", { fullName : fullName });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
