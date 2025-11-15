
export default function Strings(app) {
  
  app.get("/lab5/helloQuery", (req, res) => {
    const name = req.query.name || "stranger";
    res.send(`Hello, ${name}! (from query param)`);
  });

  
  app.get("/lab5/helloPath/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}! (from path param)`);
  });

  
  app.get("/lab5/repeat", (req, res) => {
    const text = req.query.text || "";
    const times = Number(req.query.times || 1);
    if (!text) return res.status(400).json({ error: "missing text query param" });
    if (Number.isNaN(times) || times < 1) return res.status(400).json({ error: "invalid times" });
    res.json({ result: Array(times).fill(text).join(" ") });
  });
}
