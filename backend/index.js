require("dotenv").config();

const app = require("./src/app");

const port = process.env.APP_PORT || "5005";

app.listen(port, (err) => {
  if (err) console.error("Something bad happened", err);
  console.log(`Server is listening on http://localhost:${port}`);
});
