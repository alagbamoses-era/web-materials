import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Alagba Moses</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Moses</p> <p>I am a software developer with a passion for building web applications.</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.get("/help", (req, res) => {
  res.send("<h1>Help</h1><p>For assistance, please email support@example.com</p>");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
