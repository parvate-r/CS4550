// api/courses.js
let courses = [
    { id: "1", title: "Intro to Web Dev", description: "HTML, CSS, JS" },
    { id: "2", title: "Advanced React", description: "React + Router + Hooks" }
  ];
  
  export default function coursesRoutes(app) {
    // GET all courses
    app.get("/api/courses", (req, res) => {
      res.json(courses);
    });
  
    // GET course by id
    app.get("/api/courses/:id", (req, res) => {
      const id = req.params.id;
      const course = courses.find(c => c.id === id);
      if (!course) return res.status(404).json({ error: "Course not found" });
      res.json(course);
    });
  
    // CREATE a course
    app.post("/api/courses", (req, res) => {
      const newCourse = { ...req.body, id: Date.now().toString() };
      courses.push(newCourse);
      res.status(201).json(newCourse);
    });
  
    // UPDATE a course (replace fields sent)
    app.put("/api/courses/:id", (req, res) => {
      const id = req.params.id;
      const idx = courses.findIndex(c => c.id === id);
      if (idx === -1) return res.status(404).json({ error: "Course not found" });
      courses[idx] = { ...courses[idx], ...req.body };
      res.json(courses[idx]);
    });
  
    // DELETE a course
    app.delete("/api/courses/:id", (req, res) => {
      const id = req.params.id;
      const before = courses.length;
      courses = courses.filter(c => c.id !== id);
      if (courses.length === before) return res.status(404).json({ error: "Course not found" });
      res.sendStatus(200);
    });
  }
  