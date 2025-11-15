let posts = [
  { id: 1, title: "First", body: "First post" },
  { id: 2, title: "Second", body: "Second post" }
];

export default function Arrays(app) {

  app.get("/lab5/posts", (req, res) => {
    res.json(posts);
  });


  app.get("/lab5/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const found = posts.find(p => p.id === id);
    if (!found) return res.status(404).json({ error: "post not found" });
    res.json(found);
  });


  app.post("/lab5/posts", (req, res) => {
    const { title, body } = req.body || {};
    if (!title || !body) return res.status(400).json({ error: "title and body required" });
    const id = posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const newPost = { id, title, body };
    posts.push(newPost);
    res.status(201).json(newPost);
  });


  app.delete("/lab5/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const before = posts.length;
    posts = posts.filter(p => p.id !== id);
    if (posts.length === before) return res.status(404).json({ error: "post not found" });
    res.json({ success: true });
  });


  app.put("/lab5/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, body } = req.body || {};
    const idx = posts.findIndex(p => p.id === id);
    if (idx === -1) return res.status(404).json({ error: "post not found" });
    if (title) posts[idx].title = title;
    if (body) posts[idx].body = body;
    res.json(posts[idx]);
  });
}
