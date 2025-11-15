
export default function JSONExamples(app) {
  
  app.post("/lab5/echo", (req, res) => {
  
    const body = req.body;
    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({ error: "Request body required" });
    }
    res.json({ received: body });
  });

  
  app.post("/lab5/addJSON", (req, res) => {
    const { a, b } = req.body;
    const na = Number(a);
    const nb = Number(b);
    if (Number.isNaN(na) || Number.isNaN(nb)) return res.status(400).json({ error: "a and b must be numbers" });
    res.json({ a: na, b: nb, result: na + nb });
  });
}
