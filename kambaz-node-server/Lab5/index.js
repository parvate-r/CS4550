
import Strings from "./strings.js";
import Numbers from "./numbers.js";
import JSONExamples from "./json.js";
import Arrays from "./arrays.js";

export default function Lab5(app) {
  app.get("/lab5", (req, res) => {
    res.send("Welcome to Lab 5 - Server");
  });

  Strings(app);
  Numbers(app);
  JSONExamples(app);
  Arrays(app);
}
