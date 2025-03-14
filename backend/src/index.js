import express from "express";
import cors from "cors";

import todoListRoutes from "./routes/todolist_route.js";

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json());

app.use('/api', todoListRoutes);

app.listen(port, () => {
  console.log(`Listening port on ${port}`)
})
