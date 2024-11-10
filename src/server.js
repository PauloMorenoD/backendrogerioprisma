import app from "./app.js";
import "dotenv/config";

const port =  4002;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
