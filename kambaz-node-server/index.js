import express from "express";
import "./connection.js";  // ensures MongoDB connects
import usersRoutes from "./routes/users.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import modulesRoutes from "./routes/modules.routes.js";
import enrollmentsRoutes from "./routes/enrollments.routes.js";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/courses", coursesRoutes);
app.use("/modules", modulesRoutes);
app.use("/enrollments", enrollmentsRoutes);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
