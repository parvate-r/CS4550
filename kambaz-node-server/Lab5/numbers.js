
export default function Numbers(app) {
  
  app.get("/lab5/add/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).json({ error: "a and b must be numbers" });
    res.json({ a, b, result: a + b });
  });

  
  app.get("/lab5/subtract", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    if (Number.isNaN(x) || Number.isNaN(y)) return res.status(400).json({ error: "x and y must be numbers" });
    res.json({ x, y, result: x - y });
  });

  
  app.get("/lab5/multiply/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).json({ error: "a and b must be numbers" });
    res.json({ a, b, result: a * b });
  });

  
  app.get("/lab5/calc", (req, res) => {
    const op = (req.query.op || "").toString();
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).json({ error: "a and b must be numbers" });

    let result;
    switch (op) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "multiply":
        result = a * b;
        break;
      case "divide":
        if (b === 0) return res.status(400).json({ error: "divide by zero" });
        result = a / b;
        break;
      default:
        return res.status(400).json({ error: "op must be add|subtract|multiply|divide" });
    }
    res.json({ a, b, op, result });
  });
}
