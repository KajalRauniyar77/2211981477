
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/average", (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "Input must be an array of numbers" });
  }

  if (numbers.length === 0) {
    return res.status(400).json({ error: "Array cannot be empty" });
  }

  const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  res.json({ average });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


