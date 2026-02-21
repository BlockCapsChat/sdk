import express from "express";
import dotenv from "dotenv";
import browserRoutes from "./routes/browser.routes.js";
import config from "./config/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "BlockCaps API",
    status: "running"
  });
});

app.use("/api/browser", browserRoutes);

app.listen(config.port, () => {
  console.log(`BlockCaps server running on port ${config.port}`);
});
