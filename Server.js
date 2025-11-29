const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Enrico Manalang</h1>
    <h2>IT BA 4101</h2>
    <p><i>"Success is not final, failure is not fatal; it is the courage to continue that counts."</i></p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});