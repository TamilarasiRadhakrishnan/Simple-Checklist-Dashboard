const express = require("express");
const { evaluateChecklist } = require("./controllers/checklistController");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/checklist", async (req, res) => {
  try {
    const results = await evaluateChecklist();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
