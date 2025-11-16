const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Backend server is running!" });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
