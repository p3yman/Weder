// LOAD ENV FILE
import dotenv from "dotenv";
dotenv.config();

// Import Database
import "./db";

// IMPORT APPLICATION
import app from "./app";

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
