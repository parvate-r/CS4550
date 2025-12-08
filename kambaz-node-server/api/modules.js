// api/modules.js
let modules = [
    { id: "1", title: "Module 1: Basics", courseId: "1" },
    { id: "2", title: "Module 2: Routing", courseId: "1" }
  ];
  
  export default function modulesRoutes(app) {
    // GET all modules
    app.get("/api/modules", (req, res) => {
      res.json(modules);
    });
  
    // GET module by id
    app.get("/api/modules/:id", (req, res) => {
      const id = req.params.id;
      const m = modules.find(x => x.id === id);
      if (!m) return res.status(404).json({ error: "Module not found" });
      res.json(m);
    });
  
    // CREATE module
    app.post("/api/modules", (req, res) => {
      const newModule = { ...req.body, id: Date.now().toString() };
      modules.push(newModule);
      res.status(201).json(newModule);
    });
  
    // UPDATE module
    app.put("/api/modules/:id", (req, res) => {
      const id = req.params.id;
      const idx = modules.findIndex(x => x.id === id);
      if (idx === -1) return res.status(404).json({ error: "Module not found" });
      modules[idx] = { ...modules[idx], ...req.body };
      res.json(modules[idx]);
    });
  
    // DELETE module
    app.delete("/api/modules/:id", (req, res) => {
      const id = req.params.id;
      const before = modules.length;
      modules = modules.filter(x => x.id !== id);
      if (modules.length === before) return res.status(404).json({ error: "Module not found" });
      res.sendStatus(200);
    });
  }
  