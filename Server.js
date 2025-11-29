const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Student Info</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.15);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
          text-align: center;
          width: 90%;
          max-width: 450px;
        }
        h1 {
          margin-bottom: 5px;
          font-size: 32px;
          font-weight: 700;
        }
        h2 {
          margin-top: 0;
          font-size: 22px;
          font-weight: 500;
        }
        p {
          font-size: 18px;
          margin-top: 20px;
          font-style: italic;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Enrico Manalang</h1>
        <h2>IT BA 4101</h2>
        <p>"Success is not final, failure is not fatal; it is the courage to continue that counts."</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});