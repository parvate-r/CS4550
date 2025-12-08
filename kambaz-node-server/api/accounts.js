// api/accounts.js
// Very simple in-memory user store. DO NOT use plaintext passwords in real apps.
let users = [
    // sample user for quick testing: username: alice, password: 123
    { id: "1", username: "alice", password: "123", firstName: "Alice", lastName: "Wonderland", email: "alice@wonderland" }
  ];
  
  export default function accountsRoutes(app) {
    // REGISTER
    app.post("/api/register", (req, res) => {
      const { username, password, firstName, lastName, email } = req.body;
      if (!username || !password) return res.status(400).json({ error: "username and password required" });
      if (users.find(u => u.username === username)) return res.status(409).json({ error: "username exists" });
      const newUser = { id: Date.now().toString(), username, password, firstName, lastName, email };
      users.push(newUser);
      // return user without password
      const { password: _, ...safe } = newUser;
      res.status(201).json(safe);
    });
  
    // LOGIN
    app.post("/api/login", (req, res) => {
      const { username, password } = req.body;
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) return res.status(401).json({ error: "invalid credentials" });
  
      // simple token (for lab only): return user id as token
      const token = `token-${user.id}`;
      res.json({ token, user: { id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName, email: user.email }});
    });
  
    // PROFILE (get current user by token)
    app.get("/api/profile", (req, res) => {
      // Accept token in Authorization: Bearer <token> OR ?token=...
      const auth = req.headers.authorization;
      const queryToken = req.query.token;
      const token = auth?.startsWith("Bearer ") ? auth.substring(7) : queryToken;
  
      if (!token) return res.status(401).json({ error: "no token provided" });
      const id = token.replace("token-", "");
      const user = users.find(u => u.id === id);
      if (!user) return res.status(404).json({ error: "user not found" });
      const { password, ...safe } = user;
      res.json(safe);
    });
  
    // LOGOUT — for completeness (no server side session in this simple example)
    app.post("/api/logout", (req, res) => {
      // client should delete token
      res.sendStatus(200);
    });
  }
  