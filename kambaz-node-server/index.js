import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

// Attach route modules
Hello(app);
Lab5(app);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Kambaz Node server listening on port ${PORT}`)
);
