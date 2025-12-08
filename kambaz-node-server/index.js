import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from 'cors';

import todosRoutes from "./api/todos.js";
import coursesRoutes from "./api/courses.js";
import modulesRoutes from "./api/modules.js";
import accountsRoutes from "./api/accounts.js";

const app = express();

app.use(express.json());
app.use(cors());

Hello(app);
Lab5(app);

todosRoutes(app);
coursesRoutes(app);
modulesRoutes(app);
accountsRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Kambaz Node server listening on port ${PORT}`)
);
