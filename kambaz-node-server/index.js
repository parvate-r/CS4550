import express from "express";
import cors from "cors";
import "./connection.js";

import usersRoutes from "./routes/users.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import modulesRoutes from "./routes/modules.routes.js";
import enrollmentsRoutes from "./routes/enrollments.routes.js";

const app = express();
app.use(express.json());

// Allowed origins list + regex for Vercel
const allowedOrigins = [
  "http://localhost:3000",
  /\.vercel\.app$/
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow no-origin requests

      const isAllowed = allowedOrigins.some((o) =>
        typeof o === "string" ? o === origin : o.test(origin)
      );

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    credentials: true,
  })
);

// Routes
app.use("/api/courses", coursesRoutes);
app.use("/api/modules", modulesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/enrollments", enrollmentsRoutes);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
