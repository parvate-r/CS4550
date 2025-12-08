let todos = [
    { id: "1", title: "Learn Node", completed: false },
    { id: "2", title: "Build REST API", completed: true }
  ];
  
  export default function todosRoutes(app) {
  
    // GET ALL TODOS
    app.get("/api/todos", (req, res) => {
      res.json(todos);
    });
  
    // GET TODO BY ID
    app.get("/api/todos/:id", (req, res) => {
      const id = req.params.id;
      const todo = todos.find(t => t.id === id);
      res.json(todo);
    });
  
    // CREATE TODO
    app.post("/api/todos", (req, res) => {
      const newTodo = { ...req.body, id: Date.now().toString() };
      todos.push(newTodo);
      res.json(newTodo);
    });
  
    // DELETE TODO
    app.delete("/api/todos/:id", (req, res) => {
      const id = req.params.id;
      todos = todos.filter(t => t.id !== id);
      res.sendStatus(200);
    });
  
    // UPDATE TODO
    app.put("/api/todos/:id", (req, res) => {
      const id = req.params.id;
      const index = todos.findIndex(t => t.id === id);
      todos[index] = { ...todos[index], ...req.body };
      res.json(todos[index]);
    });
  }
  