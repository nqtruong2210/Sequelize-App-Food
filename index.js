import express from "express";
import cors from "cors";
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();
const PORT = "8083";
app.use(express.json());
app.use(cors());
app.use(rootRoutes);

app.listen(PORT, () => {
  console.log(`BE starting with port ${PORT} `);
});
