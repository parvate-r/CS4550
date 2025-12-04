import express from "express";
import "./connection.js";  // ensures MongoDB connects
import usersRoutes from "./routes/users.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import modulesRoutes from "./routes/modules.routes.js";
import enrollmentsRoutes from "./routes/enrollments.routes.js";

const app = express();
app.use(express.json());

app.use("/api/courses", coursesRoutes);
app.use("/api/modules", modulesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/enrollments", enrollmentsRoutes);


app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
